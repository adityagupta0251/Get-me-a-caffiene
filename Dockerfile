# Use official Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build Next.js app (build for production)
RUN npm run build

# If you're doing static export (next export), uncomment this:
# RUN npm run export

# Expose the port the app runs on (default for Next.js is 3000)
EXPOSE 3000

# Start the app in production mode (serve the built static files if using export)
CMD ["npm", "start"]
