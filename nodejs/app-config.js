const configModel = require('../models/app-config');

exports.get = (userId) => {
  return configModel.findOne({ userId }, {}, { sort: { _id: -1 } }).lean();
};

exports.app = (userId, filter) => {
  // eslint-disable-next-line no-param-reassign
  filter = filter || ''; // Set filter to '' if not specified

  return configModel
    .findOne({ userId }, filter, { sort: { _id: -1 } })
    .lean()
    .then((data) => {
      if (!data) {
        return Promise.reject('No config saved in db');
      }

      if (filter && !data[filter]) {
        return Promise.reject(`No config found for "${filter}"`);
      }

      if (filter) {
        // eslint-disable-next-line no-param-reassign
        data = data[filter];
      }

      return data;
    });
};
