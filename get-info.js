import axios from "axios";

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const { phone } = req.query;

  if (!phone) {
    return res.status(400).json({
      success: false,
      error: "Phone number is required"
    });
  }

  try {
    const response = await axios.get(
      `https://numinfo-proxy-api.vercel.app/?num=${phone}`
    );

    res.status(200).json({
      success: true,
      data: response.data,
      developer: "Chetan Kumar"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch number info",
      details: err.message
    });
  }
}
