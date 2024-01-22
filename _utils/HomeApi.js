const { default: axiosClient } = require("./axiosClient");

const getHomePage = (language) => {
  return axiosClient.get("home?lat=31.0229324&lng=31.387179", {
    headers: {
      "Accept-Language": language,
    },
  });
};

export default {
  getHomePage,
};
