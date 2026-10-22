function isPrime(number) {
    const memory = [];
    if (number <= 1)
        return false;
    if (number > 1) {
        for (let i = 2; i <= number; i++) {
            if (number % i === 0) {
                if (number !== i) {
                    return false;
                } else {
                    return true;
                }
                }
        }
    }
}

module.exports = {
    isPrime: isPrime
};