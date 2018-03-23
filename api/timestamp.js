const moment = require('moment');

const convertTimestampToJson = timestamp => {
  let json = {
    unix: null,
    natural: null
  };

  // check if timestamp is not a valid unix timestamp but a valid date string
  if (isNaN(timestamp) && moment(timestamp).isValid()) {
    json.unix = parseInt(moment(timestamp).format('X'));
    json.natural = moment(timestamp).format('MMMM Do YYYY');
  } else if (moment(timestamp).isValid()) {
    json.unix = parseInt(timestamp);
    json.natural = moment.unix(timestamp).format('MMMM Do YYYY');
  }

  return json;
};

module.exports = convertTimestampToJson;
