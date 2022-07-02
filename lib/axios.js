import axios from "axios";

export default axios.create({
  baseURL: "https://admin.devhelal.com/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
