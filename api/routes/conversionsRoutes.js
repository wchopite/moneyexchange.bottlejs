module.exports = (app, conversionsController) => {
  app.post(`/api/conversions`, conversionsController.convert);
  // app.put(`/api/conversions`, checkAuth, handler.save);
};
