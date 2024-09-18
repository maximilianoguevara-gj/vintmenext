export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Agrega tu head y meta información si es necesario */}
        <style>{`
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }

          body {
            background-color: black; /* Fondo negro */
            color: white; /* Texto blanco */
            margin: 0;
            height: 100vh;
            font-family: Arial, sans-serif;
            position: relative;
          }

          .uploading-text {
            font-size: 24px;
            font-weight: bold;
            animation: blink 1.5s infinite;
            position: absolute;
            top: 20px; /* Posición desde el top */
            left: 50%;
            transform: translateX(-50%); /* Centrar horizontalmente */
          }
        `}</style>
      </head>
      <body>
        <h1 className="uploading-text">UPLOADING...</h1>
        {children}
      </body>
    </html>
  );
}