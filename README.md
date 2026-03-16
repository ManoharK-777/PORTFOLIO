# Manohar K | Full-Stack Portfolio

Professional portfolio with a Node.js backend and MongoDB storage for contact messages.

## Tech Stack
- **Frontend**: Vanilla JS (built with Vite)
- **Backend**: Node.js & Express
- **Database**: MongoDB (via Mongoose)
- **Deployment**: GitHub (Source) + Render (Live)

## Local Setup

1. **Backend**:
   ```bash
   cd server
   npm install
   # Ensure MongoDB is running locally or set MONGODB_URI in .env
   node index.js
   ```
   The server will run on `http://localhost:5001`.

2. **Frontend Build**:
   ```bash
   npm install
   npm run build
   ```
   The static files in `dist/` are served by the backend.

## Deployment Instructions

### 1. MongoDB Atlas (Database)
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Create a Cluster and obtain your **Connection String**.
- Whitelist `0.0.0.0/0` in Network Access for deployment.

### 2. GitHub (Source Control)
- Initialize a git repository and push your code.
- Ensure `node_modules` and `.env` are ignored.

### 3. Render (Live Hosting)
- Sign up at [Render.com](https://render.com/).
- Create a new **Web Service**.
- Connect your GitHub repository.
- **Root Directory**: `(leave blank)`
- **Build Command**: `npm install && cd server && npm install && cd .. && npm run build`
- **Start Command**: `node server/index.js`
- **Environment Variables**:
  - `MONGODB_URI`: Your MongoDB Atlas connection string.
  - `PORT`: `5001` (or let Render assign one).
