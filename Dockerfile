FROM node:16-alpine

# 앱 디렉터리 생성
WORKDIR /usr/src/app

COPY . .

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가


EXPOSE 3000
CMD [ "npm", "run", "start" ]