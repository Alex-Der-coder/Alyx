import cloudinary from 'cloudinary';
import Config from '../datas/config.json';

const cloudinaryCloudName = Config.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryAPIkey =Config.CLOUDINARY_API_KEY
const cloudinaryAPIkeysecret =Config.CLOUDINARY_API_SECRET

cloudinary.v2.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryAPIkey,
  api_secret: cloudinaryAPIkeysecret,
  secure: true,
})

export default cloudinary