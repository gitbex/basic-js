module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
    let ps = turnsSpeed / 3600;
    let count = Math.pow(2, disksNumber) - 1;
    let number =  count / ps;
    return {
        turns: count,
        seconds: number
    }
}