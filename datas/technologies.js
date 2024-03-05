const config = require('./config.json');
const cacheDurationInSeconds = 30 * 24 * 60 * 60;
const cloudinaryCloudName = config.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryFolder = config.CLOUDINARY_FOLDER;

export const technologiesList = {
  html: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/html.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  css: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/css.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  sass: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/sass.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  js: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/js.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  nodejs: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/nodejs.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  mongodb: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/mongodb.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  mysql: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/mysql.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  reactjs: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/react.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  cloudinary: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/cloudinary.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
  Github_pages: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_thumb/${cloudinaryFolder}/Github_pages.jpg?dpr_auto&q_auto&f_auto&fl=${cacheDurationInSeconds}`,
};

export default technologiesList;