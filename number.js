export default function handler(req, res) {
  const phone = req.query.phone;

  if (!phone) {
    return res.status(400).json({
      success: false,
      message: "Phone number is required"
    });
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json({
    success: true,
    phone,
    source: "Number Info API",
    developer: "Chetan Kumar"
  });
}
