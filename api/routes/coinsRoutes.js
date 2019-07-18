module.exports = (app, coinsController) => {
  app.get(`/coins`, coinsController.list);
  return {};
};
