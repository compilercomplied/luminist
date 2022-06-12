FROM node:lts-alpine as build

# --- Build args ---------------------------------------------------------------
ARG REACT_APP_API_BASE_URI
ARG REACT_APP_OAUTH_AUDIENCE
ARG REACT_APP_OAUTH_APP_ID
ARG REACT_APP_OAUTH_DOMAIN
ARG REACT_APP_OAUTH_SCOPE

# --- Build setup --------------------------------------------------------------
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public

RUN npm install
RUN npm install serve

# --- Build pipeline -----------------------------------------------------------
RUN REACT_APP_OAUTH_APP_ID=${REACT_APP_OAUTH_APP_ID} \
REACT_APP_API_BASE_URI=${REACT_APP_API_BASE_URI} \
REACT_APP_OAUTH_AUDIENCE=${REACT_APP_OAUTH_AUDIENCE} \
REACT_APP_OAUTH_DOMAIN=${REACT_APP_OAUTH_DOMAIN} \
REACT_APP_OAUTH_SCOPE=${REACT_APP_OAUTH_SCOPE} \
npm run build


# --- RUN ----------------------------------------------------------------------
FROM nginx:stable-alpine
copy --from=build /app/build /usr/share/nginx/html
expose 80

CMD [ "nginx", "-g", "daemon off;" ]