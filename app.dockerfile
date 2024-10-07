# FROM node:alpine

# ARG NEXT_PUBLIC_WS_URL
# ARG NEXT_PUBLIC_API_URL
# ENV NEXT_PUBLIC_WS_URL=${NEXT_PUBLIC_WS_URL}
# ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# WORKDIR /home/perplexica

# COPY ui /home/perplexica/

# RUN yarn install
# RUN yarn build

# CMD ["yarn", "start"]


# Start with an official Node.js runtime as a parent image
FROM node:18-alpine

ARG NEXT_PUBLIC_WS_URL
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_WS_URL=${NEXT_PUBLIC_WS_URL}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Set the working directory
WORKDIR /home/perplexica

# Copy the package.json and lock file to install dependencies
COPY ui/package.json ui/yarn.lock ./

# Install all dependencies
RUN yarn install

# Copy the rest of the frontend source code into the container
COPY ui /home/perplexica

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the development server (Next.js)
CMD ["yarn", "dev"]
