import express, { Request, Response } from "express";
import cors from "cors";
import db from "./database.js";

// Express 실행
const app = express();
// port 설정
const port = process.env.PORT || 3000;

// middleware 설정
// 프로트엔드 서버의 요청 허용(다른 서버의 요청)
app.use(cors());

// 요청의 본문(body)이 JSON일 떄 파싱 -> req.body로 만듦
app.use(express.json());

// API endpoint(Route) 설정
app.get("/api", (req: Request, res: Response) => {
  res.send("RecipeBook 백엔드 서버에 오신 걸 환영합니다!");
});

// [GET] /api/users - user 조회하는 API
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await db.query(
      "SELECT id, name, email, created_at FROM users",
      []
    );
    // 성공 시 DB에서 조회한 목록(result.rows)을 JSON형태로 응답(res)
    res.status(200).json(result.rows);
  } catch (err) {
    // 에러 발생 시 서버 로그에 에러 기록 -> 클라이언트에 500 신호 전달
    console.error("사용자 조회 중 오류: ", err);
    res.status(500).json({ message: "서버 내부 오류가 발생했습니다" });
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`🚀 백엔드 서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
