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

  if (!input) {
    return res.status(400).json({ error: "No input" });
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
你是Excel专家，只输出：

【公式】
xxx

【解释】
xxx

要求：简洁、准确、可直接使用Excel
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
    return res.status(400).json({ error: "No input" });
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
你是Excel专家，只输出：

【公式】
xxx

【解释】
xxx

要求：简洁、准确、可直接使用Excel
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
    res.status(500).json({ error: err.message });
  }
>>>>>>> bdf3d0c5d964078c76c49bfbdda8e94055166872
}