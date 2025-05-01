import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

// Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function testCloudinaryConnection() {
  try {
    const resources = await cloudinary.api.resources({ max_results: 1 });
    console.log('Cloudinary resources:', resources);
  } catch (error) {
    console.error('Error connecting to Cloudinary:', error);
  }
}

testCloudinaryConnection();
