FROM oven/bun:alpine

WORKDIR /app
COPY bun.lock package.json /app/

RUN bun install

COPY . /app

CMD ["bun", "run", "src/index.ts"]