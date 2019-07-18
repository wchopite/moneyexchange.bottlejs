const CoinsRoutes = (app, coinsController) => {
  app.get('/coins', coinsController.index);
  app.get('/coins/list', coinsController.listCoins);
  return;
};

module.exports = CoinsRoutes;
