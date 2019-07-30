const CoinsController = (coinsModel, logger) => {
  const coinsController = {};

  coinsController.list = async (req, res) => {
    logger.info('Listing all coins registered');
    const coins = await coinsModel.find({}).sort('name');
    res.json(coins);
  };

  return coinsController;
}

module.exports = CoinsController;
