const ConversionsController = (conversionsModel, logger) => {
  const conversionsController = {};

  conversionsController.convert = async (req, res) => {
    res.json({ status: 'ok' });
  };

  return conversionsController;
};

module.exports = ConversionsController;
