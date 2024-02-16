
import {S3} from 'aws-sdk'
import multer from 'multer'
import { Express } from 'express';
import config from '../../config';
const s3 = new S3({
    accessKeyId: config.aws_access_key_id,
    secretAccessKey: config.aws_secret_access_key
})
function generateRandomValue(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });
export const uploadFile = async (file:Express.Multer.File,path:string) => {

    const randomValue = generateRandomValue(10);
    const params = {
        Bucket: config.aws_bucket_name as string,
        Key: `${path}/${randomValue}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype
      };
    const upload = await s3.upload({
        Bucket: params.Bucket,
Key:params.Key,
Body:params.Body,
ContentType: params.ContentType
    }).promise()
    return upload
}

