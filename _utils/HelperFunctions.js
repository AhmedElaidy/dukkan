export const decode = (items, attr) => {
  items.forEach((item) => {
    item[attr] = item[attr]
      .replace(/\\/g, "")
      .replace(/\.(png|jpg|jpeg)/g, ".webp");
  });
};
