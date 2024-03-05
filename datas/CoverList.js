const config = require('./config.json');

const cloudinaryCloudName = config.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryFolder = config.CLOUDINARY_FOLDER;

export const CoverList = {
    kasa: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/kasa.webp`,
    hottakes: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/hottakes.png`,
    kanap: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/kanap.png`,
    lapanthere: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/lapanthere.png`,
    ohmyfood: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/ohmyfood.png`,
    booki: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/booki.png`,
    lmj: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/booki_react.png`,
    typewritter: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/typewritter.png`,
    Porteflio: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/kanap.png`,
    gba: `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/t_Final_Flash/${cloudinaryFolder}/gba.png`,
};

