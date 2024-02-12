/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
import cookieParser from "cookie-parser";
import config from "./app/config";
import path from 'path'
const app: Application = express();
import {v4 as uuid} from 'uuid'
import {S3} from 'aws-sdk'
import multer, { Multer } from 'multer'
// Parser
app.use((req,res,next)=> {
  if(req.originalUrl === '/api/v1/product/buy-product/stripe/webhook'){
    next()
  }
  else {
    express.json()(req, res, next);
  }
});
// app.use(express.json())
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}));
app.use(cookieParser(config.cookie_secret))

const static_folder =  path.join(__dirname,'..','public') 
app.use(express.static(static_folder))
// application routes
app.use("/api/v1", router);


const storage = multer.memoryStorage()
const upload = multer({
  storage,
})
app.post('/upload',upload.single('img'), async (req,res)=> {
  const originalFilename = req.file?.originalname;
  const fileBuffer = req.file?.buffer
  const s3 = new S3()
  const params = {
    Bucket: config.aws_bucket_name as string,
    Key: `upload/-${originalFilename}`,
    Body: fileBuffer
  }
  const result = await s3.upload(params).promise()
  res.json({result})
})


app.get("/", (req: Request, res: Response) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digiexplo Server</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
      .container {
        width: 1024px;
        height: 80vh;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333;
        text-align: center;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin: 10px 0;
        display: flex;
        gap: 1.5rem;
      }
      a {
        text-decoration: none;
        color: #007BFF;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome <br /> Digiexplo</h1>
      <p>Who do we have here? 😊😊</p>
    </div>
  </body>
  </html>`);
});

// global error handler
app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
