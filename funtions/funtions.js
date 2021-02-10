export function isSimple(num) {
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

export function getBiggestNumber(num) {
    let max = 0;
    while (num != 0) {
        if ((num % 10) > max) {
            max = (num % 10)
        }
        num = num / 10;
    }
    return max;
}

export function getResult(sourceArr, param, resultNode) {
    const processedArr = sourceArr.filter((el)=> {
        if(isSimple(el) && check(el, param)) {
            return true
        }
        return false
    })
    if (processedArr.length != 0) {
        resultNode.insertAdjacentText('beforeend',processedArr.join(' '))
    } else {
        resultNode.insertAdjacentText('beforeend', 'Нет элементов удовлетворяющих условию!')
    }
}

export function check(num, param) {
    return param ? getBiggestNumber(num) > (num % 10) : getBiggestNumber(num) < (num % 10);
}
