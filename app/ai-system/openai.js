import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.HACKNUTHON });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({ reply: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "API request failed" });
  }
}
