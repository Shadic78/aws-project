import AWS from 'aws-sdk';

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  else {
    console.log('Configuracion cargada');
  }
});
AWS.config.update({region: 'us-east-1'});

export const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
});

export const uploadImage = async (fileKey: string, file: any) => {
  const uploadedImage = await s3.upload({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileKey,
    Body: file.buffer,
    ACL:'public-read',
  }).promise();
  return uploadedImage;
};
