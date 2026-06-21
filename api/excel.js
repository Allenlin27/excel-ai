import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "你是Excel专家，只输出公式和解释"
        },
        {
          role: "user",
          content: input
        }
      ]
    });

    res.status(200).json({
      text: response.choices[0].message.content
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}