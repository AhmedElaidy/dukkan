const { default: axios } = require("axios");
const apiUrl = "https://phpv8.aait-d.com/dukanv2/public/api/website/";

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;
