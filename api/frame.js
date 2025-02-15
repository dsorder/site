export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    "frames": [
      {
        "image": "https://dsorder.com/preview-image.jpg", // Cambia esto si quieres
        "buttons": [
          {
            "label": "Visitar Dsorder",
            "action": "link",
            "target": "https://dsorder.com"
          }
        ]
      }
    ]
  });
}
