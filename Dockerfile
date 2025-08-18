# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# build TypeScript
RUN npm run build

# Expose port 
EXPOSE 5000

# Start the service
CMD ["npm", "start"]