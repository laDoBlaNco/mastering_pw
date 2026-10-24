const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, cb){
  fs.readdir(dir,(err,list) => {
    if(err) return cb(err);

    const filteredList = list.filter(el => path.extname(el) === `.${ext}`);
    return cb(null,filteredList);
  });
}
