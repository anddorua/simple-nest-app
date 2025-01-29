# Stage 1: Build the application
FROM node:22.13-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the NestJS application
RUN npm run build

# Stage 2: Create the production image
FROM node:22.13-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/src/app/dist ./dist

# Set environment variables
ENV MYSQL_HOST=localhost \
    MYSQL_PORT=3306 \
    MYSQL_USER=library \
    MYSQL_PASSWORD=library \
    MYSQL_DATABASE=library \
    PORT=3000

# Expose the application port
EXPOSE 3000

# Define the command to run the application
CMD ["node", "dist/main"]
