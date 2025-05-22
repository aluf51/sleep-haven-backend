# Sleep Haven Backend - Render Deployment Guide

This repository contains the Sleep Haven backend API, ready for deployment on Render.

## Features

- Express.js REST API
- MongoDB connection
- User and Sleep Plan routes
- Health check endpoint

## Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Run the development server:
   ```
   npm run dev
   ```

## Deployment to Render

### Step 1: Create a Render Account

1. Go to [render.com](https://render.com/) and sign up for a free account
2. Verify your email address

### Step 2: Create a New Web Service

1. From your Render dashboard, click "New" and select "Web Service"
2. Connect your GitHub account if prompted, or choose "Deploy from existing repository"
3. Upload this codebase to a GitHub repository and select it, or use the manual deploy option

### Step 3: Configure Your Web Service

1. Enter a name for your service (e.g., "sleep-haven-backend")
2. Select the region closest to your users
3. Choose "Node" as the runtime
4. Set the build command to: `npm install`
5. Set the start command to: `node server.js`
6. Select the "Free" plan

### Step 4: Set Environment Variables

1. Scroll down to the "Environment" section
2. Add the following environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `NODE_ENV`: Set to `production`

### Step 5: Deploy

1. Click "Create Web Service"
2. Wait for the deployment to complete (this may take a few minutes)

### Step 6: Verify Deployment

1. Once deployed, Render will provide a URL for your service (e.g., `https://sleep-haven-backend.onrender.com`)
2. Test the following endpoints:
   - `https://your-render-url.onrender.com/` (root endpoint)
   - `https://your-render-url.onrender.com/api/health` (health check)
   - `https://your-render-url.onrender.com/api/users` (users endpoint)
   - `https://your-render-url.onrender.com/api/sleep-plans` (sleep plans endpoint)

## Updating Your Frontend

Update your frontend code to use the new Render URL:

```javascript
// In your frontend code (e.g., api.js)
const API_BASE_URL = 'https://your-render-url.onrender.com/api';
```

## Troubleshooting

- **Cold Starts**: Free Render services may experience "cold starts" after periods of inactivity
- **Logs**: Check the Render dashboard logs for any errors
- **MongoDB Connection**: Ensure your MongoDB Atlas IP whitelist includes `0.0.0.0/0` to allow connections from Render

## Need Help?

If you encounter any issues with your Render deployment, please refer to the [Render documentation](https://render.com/docs) or contact support.
