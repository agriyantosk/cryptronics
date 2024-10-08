FROM --platform=linux/amd64 node:18.20.3

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ENV PORT=3000
ENV SECRET_KEY=crypto_bull
ENV POSTGRES_HOST=159.223.32.175

EXPOSE 300

CMD ["npm", "start"]