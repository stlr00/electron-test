function isSimple(num) {
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true
}

function getBiggestNumber(num) {
    let max = 0;
    while (num !== 0) {
        if ((num % 10) > max) {
            max = (num % 10)
        }
        num = Math.trunc(num / 10)
    }
    return max
}

function check(num, param) {
    return param ? getBiggestNumber(num) > (num % 10) : getBiggestNumber(num) < (num % 10)
}

function getResult(sourceArr, param) {
    const processedArr = sourceArr.filter((el)=> {
        return isSimple(el) && check(el, param)
    })
    return processedArr.length !== 0 ? processedArr.join(' ') : 'Нет элементов удовлетворяющих условию!'
}

module.exports = {isSimple, getBiggestNumber, getResult, check}
