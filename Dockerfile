
# Use the official image as a parent image.
FROM node:12

# Set the working directory.
WORKDIR ./
# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
#RUN bash init.sh
#RUN yarn
#RUN yarn --cwd ./shared/dbapi
#RUN yarn --cwd ./shared/utils

RUN rm -rf ./shared/dbapi/node_modules

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 5001

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .
# Run the specified command within the container.
CMD [ "yarn", "run", "prod"]
