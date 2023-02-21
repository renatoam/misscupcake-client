import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
import fs from 'fs/promises'
import path from "path"
import { fileURLToPath } from "url"

dotenv.config()
cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
  secure: true
})

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

async function uploadAssets() {
  const images = await fs.readdir('./public/images')
  const bufferState = await fs.readFile(path.join(dirname, 'public', 'images_changes.json'))
  const currentState = bufferState.toString('utf8')
  const newState = JSON.stringify(images)

  if (currentState === newState) {
    console.info('There is no new image to upload.')
    return false
  }

  try {
    await fs.writeFile('public/images_changes.json', JSON.stringify(images))
  } catch (error) {
    console.error(error.message)
  }

  const parsedCurrentState = JSON.parse(currentState)
  const parsedNewState = JSON.parse(newState)
  const newImages = parsedNewState.filter(image => {
    return !parsedCurrentState.includes(image)
  })

  try {
    const result = await Promise.all(newImages.map(async image => {
      const filePath = path.join(dirname, 'public/images', image)

      return await cloudinary.uploader.upload(filePath, {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        folder: 'cupcake',
      })
    }))

    console.log('Files have been uploaded successfully.', result)
    return false
  } catch (error) {
    console.log({ error })
  }
}

uploadAssets()
