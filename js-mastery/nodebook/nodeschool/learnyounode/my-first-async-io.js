const fs = require('fs');

fs.readFile(process.argv[2],(err,buffer) => {
  if(err) return err;
  
  const nlCount = buffer.toString().split('\n').length - 1;
  console.log(nlCount);
});

