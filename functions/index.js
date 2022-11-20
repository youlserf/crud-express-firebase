const functions = require("firebase-functions");
const express = require("express");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "OK" });
});

app.use(require("./routes/products.routes"));

exports.app = functions.https.onRequest(app);
