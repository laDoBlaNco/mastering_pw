const EventEmitter = require("node:events");

const celebrity = new EventEmitter();

// subscribe to celebrity for Observer1
celebrity.on("race", (res) => {
  if(res==='win'){
    console.log("Congratulations! You are the best!")
  };
});

// subscribe to celebrity for Observer2
celebrity.on("race", (res) =>{
  if(res==='lost'){
    console.log("Boo, I should have done better than that.")
  }
});

process.on('exit', (code) => {
  console.log('Process exit event with code:',code);
})

celebrity.emit('race','win');
celebrity.emit('race','lost');


