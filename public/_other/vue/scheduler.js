let isFlashing = false;
let isFlashingPending = false;

const queue = [];

const p = Promise.resolve();

function nextTick(fn) {
    return p.then(fn)
}

function queueJob(job) {
    if(!queue.includes(job)) {
        queue.push(job);
        queueFlush();
    }
}

function queueFlush() {
    if(!isFlashingPending && !isFlashing) {
        isFlashingPending = true;
        nextTick(flushJobs);
    }
}

function flushJobs() {
    let job;
    isFlashing = true;
    isFlashingPending = false;

    while((job = queue.shift()) !== undefined) {
        job();
    }
    isFlashing = false;
}

export { queueJob, nextTick };
