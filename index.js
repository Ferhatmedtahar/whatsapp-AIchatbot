import "dotenv/config";
import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";
import { generateResponse } from "./Model.js";

const client = new Client();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
client.on("ready", () => {
  console.log("Client is ready!");
});
client.on("message", async (message) => {
  if (message.from !== "status@broadcast") {
    const response = await generateResponse(message.body);
    await message.reply(response);
  }
});
client.initialize();
