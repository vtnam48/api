# Stage 1: Build the application
FROM node:lts-alpine AS build

WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies cần thiết cho production
RUN npm install

COPY . .

# Stage 2: Production-ready image
FROM node:lts-alpine AS production

WORKDIR /app

# Sao chép các tệp cần thiết từ giai đoạn build
COPY --from=build /app ./

EXPOSE 3050

# Command to run your app
CMD ["npm", "start"]