# WARNING: 尚未測試
# build stage
ARG NODE_VERSION=18
FROM --platform=linux/amd64 node:${NODE_VERSION}-slim AS build-env
COPY . /app
WORKDIR /app
RUN npm ci --omit=dev --audit=false --fund=false
RUN npm run build
#RUN npm prune --omit=dev --audit=false --fund=false

# preview stage
FROM gcr.io/distroless/nodejs${NODE_VERSION}-debian11:nonroot
USER nonroot:nonroot
COPY --from=build-env --chown=nonroot:nonroot /app/dist /app/dist
COPY --from=build-env --chown=nonroot:nonroot /app/node_modules /app/node_modules
WORKDIR /app

EXPOSE 9000
CMD ["npm", "run", "preview"]