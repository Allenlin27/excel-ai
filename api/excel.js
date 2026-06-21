<<<<<<< HEAD
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
=======
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "缺少输入内容" });
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
你是Excel专家，只做三件事：

1. 生成Excel公式
2. 解释公式

严格格式：

【公式】
xxx

【解释】
xxx

必须简洁、可直接使用。
          `
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
    res.status(500).json({
      error: err.message
    });
  }
>>>>>>> 2c044529212d28b46c95d62fb29d20a7de4c56ab
}