const CoinModel = () => {
  const coinModel = {};
  const mockCoins = [
    { name: 'Dolar', description: 'Dolar', code: 'USD', symbol: '$' },
    { name: 'Euro', description: 'Euro', code: 'EUR', symbol: '€' }
  ];

  coinModel.list = () => {
    return mockCoins;
  };

  return coinModel;
};

module.exports = CoinModel;
