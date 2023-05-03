# ai-image-generation
## Introduction
This AI Image generation application is reference to the step by step guide from JavaScript Mastery tutorial on AI Image Generation App with MERN https://www.youtube.com/watch?v=EyIvuigqDoA. 


## Technology
Mongo DB Atlas, Express, React, Node.js, and Open AI API, Tailwindcss framework

## How to start develop frontend
```
npm create vite@latest ./
npm install

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

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
> Create an account in mongo db https://www.mongodb.com/ and create a cluster and capture the connection string
> Create an account in openai https://platform.openai.com/docs/api-reference  and capture the Open AI API
> Create an account in cloudinary https://cloudinary.com/ and capture the Cloud name / API key / API secret
> Create a .env file with below info 
```
MONGODB_URL=<Connection String of MONGO DB>
OPENAI_API_KEY=<API key of Open AI API>
CLOUDINARY_CLOUD_NAME=<Cloudinary Cloud name>
CLOUDINARY_API_KEY=<Cloundinary API key>
CLOUDINARY_API_SECRET=<Cloudinary API secret>
```

> Run backend
```
cd server
npm start
```

> Run frontend
```
cd client
npm run dev
``` 

## Reference:
> https://www.mongodb.com/
> Use mongodb to store the post data and link of generated image

> https://vitejs.dev/guide/
> ViteJS to create the frontend react app folder structure

> https://tailwindcss.com/docs/installation

> https://openai.com/
> Generate the image by Open AI create image 

> https://cloudinary.com/
> Store the generated image

> https://render.com/
> Host web app
