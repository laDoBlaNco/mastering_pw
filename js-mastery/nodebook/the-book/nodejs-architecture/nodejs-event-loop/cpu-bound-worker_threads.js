/**
 * CPU-BOUND WORK AND WORKER THREADS:
 * 
 * Some tasks are genuinely CPU-heavy. Asynchronous I/O doesn't make CPU
 * work disappear. It only stops I/O waiting from holding the JS call stack.
 * 
 * PARTITIONING ON THE EVENT LOOP
 * 
 * If a large task can be split into pieces, we should use partitioning. We do
 * a small slice of the wowrk, yield to the event loop with setImmediate(), then
 * continue where we left off on the next pass. This keeps the application responsive
 * to other requests, but it does NOT make the total computation finish any
 * faster. In fact  it would take longer.
 */
const bigArray = Array.from({length: 1_000_000},(_,i) => i);
let sum = 0;
let index = 0;

function processChunk(){
  const end = Math.min(index + 1000, bigArray.length);
  for(;index < end; index++){
    if(index < bigArray.length){
      sum += bigArray[index];
      setImmediate(processChunk);
    }else{
      console.log('Processing complete. Sum:',sum);
    }
  }
}

setImmediate(processChunk);
console.log('Started processing...');

/**
 * The approach tracks progress with an index pointer instead of slicing
 * or shifting a large area in memory. Each callback does a bounded amount 
 * of wowrk, then yields so other waiting callbacks get a turn. To let the
 * rest of the application run before the first chunk starts, we can just 
 * begin the process with a scheduling point. 
 */