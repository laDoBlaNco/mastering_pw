/**
 * THE CLUSTER MODULE:
 * 
 * We shouldn't confuse worker_threads with the cluster module 🤔
 * For a long-time some very deep masters of the node assumed they
 * were nearly the same thing, built for the same job, THEY ARE NOT.
 * 
 * They look similar but solve different problems. cluster runs multple
 * Node processes that share the same server ports. It is built for scaling
 * a whole server across CPU cores and keeping the processes isolated. It
 * is NOT for offloading a single heavy calculation inside one request
 * handler.
 * 
 * cluster is built on child_process.fork(). A primary process hands out incoming
 * network connections to the workers. Each worker is a fully independent
 * process with its ownw event loop, its own V8 instance, its own memory,
 * and its own process ID.
 * 
 * NOTE: I should use worker_threads whwen one process needs to run JS in
 * parallel. I should use cluster when I want separate process instances
 * that share server ports and stay isolated from each other.
 * 
 * NOTE: though I've never used it, I have heard of pm2. so pm2 start app.js
 * does the same clustering, managed for us.
 */