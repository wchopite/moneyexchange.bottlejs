const CoinsController = (coinModel, logger) => {
  const coinsController = {};

  coinsController.index = (req, res) => {
    res.json({ message: 'coinsController.index' });
  };

  coinsController.listCoins = (req, res) => {
    logger.info('Listing all coins registered');
    res.json(coinModel.list());
  };

  return coinsController;
}

module.exports = CoinsController;
