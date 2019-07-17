const CoinModel = () => {
  const coinModel = {};

  coinModel.list = () => {
    const coins = ['USD', 'EURO', 'Peso Argentino', 'Peso Mexicano', 'Peso Chileno'];
    return coins;
  };

  return coinModel;
};

module.exports = CoinModel;
