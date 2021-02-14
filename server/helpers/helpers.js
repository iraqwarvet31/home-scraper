exports.parseCity = (city) => {
  if (city.includes(' ') === true) {
    return city.replace(/\s/, '-');
  }
  return city;
};

exports.parseState = (state) => {
  if (state.includes(' ') === true) {
    return state.replace(/\s/, '-');
  }
  return state;
}
