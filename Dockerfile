# Use the latest Node.js image as the base image
FROM node:alpine

# Create a working directory in the container
WORKDIR /app

# Copy only the package.json and yarn.lock files first to leverage Docker cache
COPY package.json* ./
COPY yarn.lock* ./

# Install dependencies (this step will be cached if package.json/yarn.lock haven't changed)
RUN npm install 

# Copy the rest of the application code
COPY . .

# Build the TypeScript code to the dist directory
RUN npm run tsc

# Expose the port that the application will run on
EXPOSE 8080

# Start the application
CMD ["yarn", "start"]
