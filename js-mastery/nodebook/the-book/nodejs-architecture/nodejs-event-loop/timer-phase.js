/**
 * THE TIMERS PHASE
 * 
 * 'setTimeout' and 'setInterval' callbacks run in the timers phase.
 * The traditional event-loop diagrams still help sort out the callback
 * categories, but one detail has changed. Starting with nodejs 20 and
 * libuv 1.45.0, timers run strictly after the poll phase finishes. Older
 * docs and older Node versions show timers running both before and after
 * the poll phase. THAT IS NO LONGER TRUE. 
 * NOTE: According to the docs, for backwards compatibility timers run
 * before the event loop starts and then its now running after the poll
 * phase. 
 * 
 * A timer callback never runs at the exact millisecond we ask for. The delay
 * we pass is a MINIMUM THRESHOLD, the earliest the callback can run. Then
 * Node reaches timer processing, it checks which thresholds have passed
 * and runs the ones that are ready.
 * 
 * libuv stores active timers in a MIN-HEAP (the data structure not the memory)
 * a tree that keeps the next timer to expire at the root (top). That layout
 * lets the loop work out quickly how long it can wait on other tasks before
 * the next timer is due.
 * 
 * NOTE: The min-heap is an internal libuv detail, not a guarantee in any
 * JS api. The practical point is that finding the next timer is cheap, while
 * scheduling or canceling a large number of timers at once still has a
 * small cost.
 */