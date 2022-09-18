/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line no-unused-vars
const stripe = require("stripe")(
    "sk_test_51KxmHCSEYAT3VzQxgidBGWjx3ZoD4GEASG3AdsdDJ2drKZzecRGjRvaByIGEFHu7qn8tjNsDD0b90FIzOR3ctdi600F0I69EC8"
);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, respose) => respose.status(200).send("Hey Loki"));

express.api = functions.https.onRequest(app);
