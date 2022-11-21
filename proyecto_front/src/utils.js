export const getError = (error) => {
  return error.response && error.res.message
    ? error.res.message
    : error.message;
};
