import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()
cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  secure: true
})

async function uploadAssets() {
  try {
    const result = await cloudinary.uploader.upload('public/react.svg', {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder: 'cupcake'
    })

    console.log({ result })
    return false
  } catch (error) {
    console.log({ error })
  }
}

uploadAssets()
