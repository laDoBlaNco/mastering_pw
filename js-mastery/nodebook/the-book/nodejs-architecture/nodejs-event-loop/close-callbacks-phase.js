/**
 * CLOSE CALLBACKS
 * 
 * This phase handles certain 'close' events. If we tear down a connection
 * with 'socket.destroy()', that socket's 'close' event fires here. But
 * not EVERY close notification waits for this phase. So go through other
 * paths, like process.nextTick(). (🤔🤓 this is starting to clear-up what
 * this 'tick' is considered in node. I'll see more in the next section)
 * 
 * When this phase ends, the loop checks whether anything still keeps the
 * process running, since this is technically the last phase before  the
 * loop starts another iteration. If active resources remain, like referenced
 * handles, pending requests, open sockets, or running servers, Node starts
 * the next iteration.
 */