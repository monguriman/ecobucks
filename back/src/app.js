import cors from "cors";
import express from "express";
import { userAuthRouter } from "./routers/user-router.js";
import { productRouter } from "./routers/product-router.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { challengeRouter } from "./routers/challenge-router.js";
import { participationRouter } from "./routers/challenge-participation-router.js";
import { commentRouter } from "./routers/challenge-comment-router.js";
import { blogPostRouter } from "./routers/blogpost-router.js";
import { blogCommentRouter } from "./routers/blogcomment-router.js";
import { scheduleChallenge } from "./utils/cron-schedule.js";
import { orderRouter } from "./routers/order-router.js";
import { imageRouter } from "./routers/image-router.js";
import { dataRouter } from "./routers/data-router.js";


const app = express();

// 외부노출방지 헤더정보 비활성화 
app.disable('x-powered-by');

// CORS 에러 방지
app.use(cors());

// express 기본 제공 middleware
// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
// express.urlencoded: 주로 Form submit 에 의해 만들어지는 URL-Encoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});
app.use(dataRouter);
// router, service 구현 (userAuthRouter는 맨 위에 있어야 함.)
app.use(userAuthRouter);
app.use(productRouter);

app.use(challengeRouter);
app.use(participationRouter);
app.use(commentRouter);

app.use(blogPostRouter);
app.use(blogCommentRouter);

app.use(imageRouter);

// 'uploads' 디렉토리를 '/uploads' URL 경로로 공개
app.use('/uploads', express.static('uploads'));

scheduleChallenge();
app.use(orderRouter);

// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

export { app };
