module.exports = function checkAuthorized({ model }) {
  return async function (req, res, next) {
    if (req.user.admin) return next();
    const author = await model.findAuthor(req.params.id);
    if (author.user_id === req.user.id) {
      return next();
    }
    return next("Access denied");
  };
};
