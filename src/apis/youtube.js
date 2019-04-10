import axios from "axios";

const KEY = "AIzaSyDCc44wmX-lku6cA0oDPWKWSf6pGfq2TaY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
