function rSuccess(res, code, data) {
  const response = {
    code,
    ...data,
  };
  return res.status(code).json(response);
}

function rError(res, code, errors, data) {
  // this.message = message;
  const response = {
    code,
    errors,
    ...data,
  };
  return res.status(code || 500).json(response);
}

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
}
export { rSuccess, rError, wrapAsync };
