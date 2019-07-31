const ConversionsController = (ConversionsModel, logger, convert, config) => {
  const conversionsController = {};

  conversionsController.convert = async (req, res) => {
    const { base, to, value } = req.body;
    const query = {
      $or: [{ $and: [{ base, to }] }, { $and: [{ base: to, to: base }] }]
    };

    const conversion = await ConversionsModel.findOne(query)
      .sort({ createdAt: -1 })
      .limit(1);

    const operator =
      conversion.base === base ? config.get('conversor.operator') : '/';
    const roundTo = config.get('conversor.roundTo');
    const newValue = convert(value, conversion.conversionFactor)(
      operator,
      roundTo
    );
    res.json(newValue);
  };

  conversionsController.save = async (req, res) => {
    const { base, to, conversionFactor } = req.body;
    const now = new Date().valueOf();

    /* const { isValid, validator } = _schemaValidator.validate(Object.assign({},inputSchema.conversionSchema), {base, to, conversionFactor});
    if(!isValid) {
      _logger.info('Input data validation',{ payload: req.body, errors: validator.errors });
      res.status(400).json({message: 'You must indicate the correct data'});
      return;
    } */

    const conversion = new ConversionsModel({
      base,
      to,
      conversionFactor,
      date: now
    });

    const result = await conversion.save();
    res.json(result);
  };

  return conversionsController;
};

module.exports = ConversionsController;
