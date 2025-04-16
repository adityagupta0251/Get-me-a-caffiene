# 1. Use official Node.js base image for building
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all project files and build the app (including Tailwind CSS and Next.js static export)
COPY . . 
RUN npm run build
RUN npm run export

# 5. Prepare the production environment
FROM node:18-alpine

# 6. Set working directory for the final stage
WORKDIR /app

# 7. Copy only the necessary files from the builder image
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/out ./out

# 8. Install serve globally for serving static files
RUN npm install -g serve

# 9. Expose the desired port (4040)
EXPOSE 4040

# 10. Command to run the app
CMD ["serve", "-s", "out", "-l", "4040"]
