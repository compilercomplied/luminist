Build image (wip)

```
docker build \
--build-arg REACT_APP_API_BASE_URI=$REACT_APP_API_BASE_URI \
--build-arg REACT_APP_OAUTH_AUDIENCE=$REACT_APP_OAUTH_AUDIENCE \
--build-arg REACT_APP_OAUTH_APP_ID=$REACT_APP_OAUTH_APP_ID \
--build-arg REACT_APP_OAUTH_DOMAIN=$REACT_APP_OAUTH_DOMAIN \
--build-arg REACT_APP_OAUTH_SCOPE=$REACT_APP_OAUTH_SCOPE \
-t luminist .
```

Run the image

```
docker run -p 80:80 luminist
```
