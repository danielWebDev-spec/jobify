const notFoundMiddleware = (req, res) => {
  res.send("Route not found");
};

export default notFoundMiddleware;
