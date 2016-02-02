'use strict';

const fs = require('fs');

module.exports = exports = (cb) => {
  console.log('Beginning setup');
  const spheroFile = 'tty.Sphero';
  fs.readdir('/dev', (err, files) => {
    if (err) return console.log(err);
    files.filter(file => file.indexOf(spheroFile) === 0);
    /* eslint-disable camelcase */
    const config = require('home-config').load('.spheroconfig', {
      Sphero_ID: files[0]
    });
    /* eslint-enable camelcase */
    config.save();
    console.log('Info saved to ~/.spheroconfig');
    cb();
  });
};
