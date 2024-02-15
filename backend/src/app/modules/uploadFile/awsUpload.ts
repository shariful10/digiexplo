import {v4 as uuid} from 'uuid'
import {S3} from 'aws-sdk'
import multer from 'multer'
import { Express } from 'express';
import config from '../../config';
const s3 = new S3({
    accessKeyId: config.aws_access_key_id,
    secretAccessKey: config.aws_secret_access_key
})


const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });
export const uploadFile = async (file:Express.Multer.File) => {

    const params = {
        Bucket: config.aws_bucket_name as string,
        Key: file.originalname,
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

