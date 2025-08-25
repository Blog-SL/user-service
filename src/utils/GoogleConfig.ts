import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.Google_Client_id;
const GOOGLE_CLIENT_SECRET = process.env.Google_client_secret;

export const oauth2client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  "https://www.blogsl.dev/user/api/v1/login"
  // "postmessage"
);

console.log("CLIENT_ID:", GOOGLE_CLIENT_ID);
console.log("CLIENT_SECRET:", GOOGLE_CLIENT_SECRET);
