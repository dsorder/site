export default function handler(req, res) {
  // Configuración de los headers para evitar problemas de CORS (si los necesitas)
  res.setHeader('Content-Type', 'text/html');

  // HTML con el iframe que mostrará tu sitio web
  const iframeHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frame Viewer</title>
        <style>
          /* Estilos para hacer que el iframe ocupe toda la pantalla */
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
          }

          iframe {
            border: none;
            width: 100%;
            height: 100%;
            display: block;
          }
        </style>
      </head>
      <body>
        <iframe src="https://site-6iblbs3ma-dsorder1s-projects.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>
  `;

  // Responde con el HTML que contiene el iframe
  res.status(200).send(iframeHtml);
}
export default function handler(req, res) {
  res.status(200).json({
    iframe: 'https://yourwebsite.com', // Pon aquí la URL de tu web que quieres mostrar dentro del iframe
  });
}
