# ai-image-generation
## Introduction
This AI Image generation application is using Open AI API to generate a image based on the description provided. The frontend is writtern in React while the backend is writtern in Node.js using Express framework and connected to Mongo DB. The image is stored on cloudinary for storage. 

You can visit the link below to try. 
https://ai-image-generation-frontend-9wqp.onrender.com


## Technology
Mongo DB Atlas, Express, React, Node.js, and Open AI API, MaterialUI

## How to start develop frontend
```
npm create vite@latest ./
npm install

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

npm install file-saver
npm install react-router-dom

npm run dev
```

## How to start develop backend
```
npm init -y
npm install cloudinary cors dotenv express mongoose nodemon openai
```

## How to launch

## Pre-requisites
1. Create an account in mongo db https://www.mongodb.com/ and create a cluster and capture the connection string
2. Create an account in openai https://platform.openai.com/docs/api-reference  and capture the Open AI API
3. Create an account in cloudinary https://cloudinary.com/ and capture the Cloud name / API key / API secret
4. Create a .env file with below info 
```
MONGODB_URL=<Connection String of MONGO DB>
OPENAI_API_KEY=<API key of Open AI API>
CLOUDINARY_CLOUD_NAME=<Cloudinary Cloud name>
CLOUDINARY_API_KEY=<Cloundinary API key>
CLOUDINARY_API_SECRET=<Cloudinary API secret>
```

5. Run backend
```
cd server
npm start
```

6. Run frontend
```
cd client
npm run dev
``` 

## Future thoughts
1. Add the function to like
2. Add the function to share

## Reference:
> https://www.youtube.com/watch?v=EyIvuigqDoA
> Javascript Mastertery tutorial 

> https://www.mongodb.com/
> Use mongodb to store the post data and link of generated image

> https://vitejs.dev/guide/
> ViteJS to create the frontend react app folder structure

> https://tailwindcss.com/docs/installation

> https://mui.com/material-ui/getting-started/overview/

> https://openai.com/
> Generate the image by Open AI create image 

> https://cloudinary.com/
> Store the generated image

> https://render.com/
> Host web app
