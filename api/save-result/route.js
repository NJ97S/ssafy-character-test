import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  // POST 요청만 허용
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Supabase 클라이언트 생성
    // 환경 변수에서 Supabase URL과 Key 가져오기
    const supabaseUrl = process.env.VITE_PUBLICSUPABASE_URL;

    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    // 환경 변수가 없으면 에러
    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing");
      return res.status(500).json({
        error: "Server configuration error",
        message: "Supabase credentials not configured",
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { resultType, characterCounts, totalQuestions, percentages } =
      req.body;

    // 데이터 유효성 검사
    if (!resultType || !characterCounts || !percentages) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Supabase에 데이터 삽입
    const { data, error } = await supabase
      .from("character_results")
      .insert([
        {
          result_type: resultType,
          character_counts: characterCounts,
          total_questions: totalQuestions,
          percentages: percentages,
          user_agent: req.headers["user-agent"] || null,
          ip_address:
            req.headers["x-forwarded-for"] || req.socket.remoteAddress || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({
        error: "Failed to save result",
        message: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      id: data.id,
      created_at: data.created_at,
    });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({
      error: "Failed to save result",
      message: error.message,
    });
  }
}
