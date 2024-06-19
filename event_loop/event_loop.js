function delayedLog(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    });
}
function printNumbers(start, end) {
    if (start <= end) {
        delayedLog(start).then(() => {
            printNumbers(start + 1, end);
        });
    }
}
printNumbers(1, 10);
