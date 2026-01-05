import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  // POST 요청만 허용
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Supabase 클라이언트 생성
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      return res.status(500).json({ error: "Supabase configuration missing" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 요청 본문에서 데이터 추출
    const { resultType, characterCounts, totalQuestions, percentages } =
      req.body;

    // 데이터 유효성 검사
    if (!resultType || !characterCounts || !percentages || !totalQuestions) {
      return res.status(400).json({
        error: "Missing required fields",
        required: [
          "resultType",
          "characterCounts",
          "totalQuestions",
          "percentages",
        ],
      });
    }

    // 데이터베이스에 저장
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
            req.headers["x-forwarded-for"]?.split(",")[0] ||
            req.socket?.remoteAddress ||
            null,
        },
      ])
      .select("id, created_at")
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
      timestamp: data.created_at,
    });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
