const peopleNames = require("../country/state/city/index");
const names = require("../utilities/utils/index");
const getPeopleInCity = (peopleNames) => {
  return names(peopleNames);
};
module.exports = getPeopleInCity;
