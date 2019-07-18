const CoinsController = (coinsModel, logger) => {
  const coinsController = {};

  coinsController.index = (req, res) => {
    res.json({ message: 'coinsController.index' });
  };

  coinsController.listCoins = (req, res) => {
    logger.info('Listing all coins registered');
    res.json(coinsModel.list());
  };

  return coinsController;
}

module.exports = CoinsController;
