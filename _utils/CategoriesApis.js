const { default: axiosClient } = require("./axiosClient");

const getAllCategories = (language) => {
    return axiosClient.get("categories", {
    headers: {
      "Accept-Language": language,
    },
  });
};

export default {
  getAllCategories,
};
