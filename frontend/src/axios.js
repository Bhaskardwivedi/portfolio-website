import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://192.168.31.164:8000/api/",
  withCredentials: true,
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken") || "",
  },
});

export default instance;
