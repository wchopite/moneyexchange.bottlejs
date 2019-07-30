module.exports = (app, coinsController) => {
  app.get(`/api/coins`, coinsController.list);
};
