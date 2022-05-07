const compareTime = (a, b) => {
    if (a.time === b.time) {
        return b.isLeaving ? 1 : -1;
    }

    return a.time - b.time;
};

const count = (items) => {
    const entries = [];

    for (const [enteringTime, leavingTime] of items) {
        entries.push({
            time: enteringTime,
            isLeaving: false
        });

        entries.push({
            time: leavingTime,
            isLeaving: true
        });
    }

    entries.sort(compareTime);

    let currentCount = 0;
    let maxCount = 0;

    for (const {isLeaving} of entries) {
        currentCount += isLeaving ? -1 : 1;
        maxCount = Math.max(currentCount, maxCount);
    }

    return maxCount;
};

test(count([]), 0);
test(count([[1, 5], [5, 10]]), 1);
test(count([[1, 5], [0, 1], [4, 5]]), 2);
test(count([[1, 10], [5, 6], [2, 3], [7, 8]]), 2);
test(count([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]]), 4);