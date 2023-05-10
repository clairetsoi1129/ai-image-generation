# AI Image Generation Application

This AI Image Generation application allows users to generate images based on provided descriptions using the OpenAI API. The frontend is built with React, while the backend utilizes Node.js with the Express framework and is connected to a MongoDB database. The images are stored on Cloudinary for efficient storage and retrieval. Users can create posts by providing their name and a prompt, which the system uses to call the OpenAI API and generate the corresponding image. If satisfied with the generated image, users can share it with the community. The application also provides a list of generated images for users to browse. The following tech stack was used: MongoDB Atlas, Express, React, Node.js, OpenAI API, and MaterialUI.

## Demo site

https://ai-image-generation-frontend-9wqp.onrender.com

## Features

- **Image Generation**: Users can generate images by providing descriptions as prompts. The OpenAI API is used to generate the corresponding image based on the provided input.
- **Post Creation**: Users can create posts by submitting their name and a prompt. The system then calls the OpenAI API to generate an image based on the prompt and stores it.
- **Sharing to Community**: If users are satisfied with the generated image, they have the option to share it with the community.
- **Image List**: The application provides a list of generated images for users to view and explore.

## Tech Stack

The AI Image Generation application is built using the following technologies:

- **MongoDB Atlas**: A cloud-based MongoDB database service for data storage and retrieval.
- **Express**: A fast and minimalistic web application framework for Node.js used for building the backend API.
- **React**: A popular JavaScript library for building user interfaces and the frontend of the application.
- **Node.js**: A JavaScript runtime environment that allows running JavaScript code outside the browser, used for the backend server.
- **OpenAI API**: An API provided by OpenAI that enables image generation based on given prompts.
- **Material-UI**: A popular React UI component library for creating responsive and visually appealing user interfaces.

## Installation

To run the AI Image Generation application locally, please follow the steps below:

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.
- A MongoDB Atlas account for connecting to the MongoDB database. 
- A Cloudinary account for storing and retrieving images.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/clairetsoi1129/ai-image-generation-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-image-generation-app
   ```

3. Install the dependencies for both the frontend and backend:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file in the `server` directory.
   - Add the following variables to the `.env` file:

     ```
     MONGODB_URI=your_mongodb_uri
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     OPENAI_API_KEY=your_openai_api_key
     ```

     Replace `your_mongodb_uri` with the MongoDB Atlas connection URI, `your_cloudinary_cloud_name` with your Cloudinary cloud name, `your_cloudinary_api_key` with your Cloudinary API key, `your_cloudinary_api_secret` with your Cloudinary API secret, and `your_openai_api_key` with your OpenAI API key.

5. Start the backend server:

   ```bash
   cd server && npm start
   ```

6. In a new terminal, start the frontend development server:

   ```bash
   cd client && npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the AI Image Generation application.

## Deployment

To deploy the AI Image Generation application to a production environment, follow these general steps:

1. Build the optimized production-ready frontend bundle:

   ```bash
   cd client && npm run build
   ```

2. Deploy the generated `build` directory to your preferred hosting service or server. Ensure that the backend server is configured to serve the frontend bundle.

3. Set up the required environment variables (e.g., MongoDB Atlas connection URI, Cloudinary credentials, and OpenAI API key) in your production environment.

4. Configure your production server or hosting service to serve the frontend build and route API requests to the backend server.

5. Start the backend server in production mode:

   ```bash
   cd server && npm start
   ```

6. Ensure that the frontend build is being served from the appropriate location by accessing your deployed application's URL.


## My way to deploy backend (nodejs) in render

1. Register / Signin to https://render.com/
2. Click new web service
3. Select the project in github
4. Input the name, eg. myfashion-backend
5. Input branch in github
6. Input the backend dIrectory for root directory, eg. backend
7. Input the build comIand, eg. npm install
8. Input the start command, eg. npm run start

## My way to deploy frontend (reactjs) in render

1. Register / Signin to https://render.com/
2. click new static site
3. Select the project in github
4. Input the name, eg. myfashion-frontend
5. Input branch in github
6. Input the backend directory for root directory, eg. client
7. Input the build command, eg. npm run build
8. Input the publish directory, eg. build

## Future thoughts
1. Add the function to like
2. Add the function to share

## How to start the development from scratch?
## Start develop frontend
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

## Start develop backend
```
npm init -y
npm install cloudinary cors dotenv express mongoose nodemon openai
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
