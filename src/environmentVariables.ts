import { z } from "zod";

const variables = z.object({
  CLOUDINARY_URL: z.string(),
  API_KEY: z.string(),
  API_SECRET: z.string(),
  CLOUD_NAME: z.string(),
  VITE_BASE_IMAGE_URL: z.string(),
  VITE_API_BASE_URL: z.string(),
  VITE_API_LOCAL_BASE_URL: z.string(),
})

variables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}
