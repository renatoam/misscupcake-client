FROM node:18.16-alpine AS app

WORKDIR /app

COPY package*json .

RUN pwd
RUN npm install

# copy app files after install to bypass layer cache
COPY . .

# of course we should not expose the real values here, I'll handle this with compose later
# We need to pass the production base url on building the image with --build-arg VITE_API_BASE_URL=url
ARG VITE_API_BASE_URL
ARG VITE_API_LOCAL_BASE_URL=http://localhost:3001/missapi/v1
ARG VITE_BASE_IMAGE_URL=https://res.cloudinary.com/otaner/image/upload

ENV VITE_API_LOCAL_BASE_URL=$VITE_API_LOCAL_BASE_URL
ENV VITE_BASE_IMAGE_URL=$VITE_BASE_IMAGE_URL

RUN npm run build

FROM nginx:stable

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# I'm build FE and copying to nginx so instead serve the app directly,
# I'm using Nginx as web server. 
COPY --from=app ./app/dist/ /usr/share/nginx/html/

RUN ls /usr/share/nginx/html/

EXPOSE 80

# We don't have CMD or ENTRYPOINT here because we're using the Nginx image commands

# ENTRYPOINT ["nginx", "-g", "daemon off;"]
