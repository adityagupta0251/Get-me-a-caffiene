# 1. Use official Node.js base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all project files
COPY . .

# 5. Build CSS and Next.js static site
RUN npm run build

# 6. Use serve to serve the static export
RUN npm install -g serve

# 7. Expose desired port
EXPOSE 4040

# 8. Command to run the app
CMD ["serve", "-s", "out", "-l", "4040"]
