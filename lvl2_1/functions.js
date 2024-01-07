const filterDataMore = (array) => {
  let filterArr = array.filter((elt) => elt.population >= 100000);
  return filterArr;
};

const filterDataLess = (array) => {
  let filterArr = array.filter((elt) => elt.population <= 100000);
  return filterArr;
};

module.exports = { filterDataMore, filterDataLess };
