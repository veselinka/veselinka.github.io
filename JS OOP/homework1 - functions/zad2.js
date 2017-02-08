function solve() {

    return function(a, b) {
        let array = [];
        let isPrime = true;
        if (a === undefined || b === undefined) {
            throw '';
        }
        for (let i = +a; i <= +b; i += 1) {
            for (let j = 2; j < i; j += 1) {
                if (i % j === 0) {
                    isPrime = false;
                }
            }
            if (isPrime && i !== 1 && i !== 0) {
                array.push(i);
            }
            isPrime = true;
        }
        return array;
    };
}