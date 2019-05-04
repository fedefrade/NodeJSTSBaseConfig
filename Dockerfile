FROM node:10
ENV PORT 8080
ENV HOST "0.0.0.0"
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
# If building code for production RUN npm ci --only=production
RUN npm install
# Copy the other files to image
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]