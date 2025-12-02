import express from "express";
import fs from "fs";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/pixel.png", (req, res) => {
  const email = req.query.email || "sin_email";
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];
  const fecha = new Date().toISOString();

  console.log(`OPEN | ${email} | ${ip} | ${fecha} | ${userAgent}`);

  // Pixel transparente de 1x1
  const pixel = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAA"+ 
    "AAC0lEQVR42mP8/wwAAgMBApFdxWcAAAAASUVORK5CYII=",
    "base64"
  );

  res.set("Content-Type", "image/png");
  res.send(pixel);
});

app.listen(PORT, () => console.log("Pixel tracker activo en puerto " + PORT));
