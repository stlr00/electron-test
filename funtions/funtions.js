function isPalindrome(num) {
    num = num.toString()
    return num == num.split("").reverse().join("")
}

function getBiggestNumber(num) {
    let max = 0;
    while(num != 0) {
        if ((num % 10) > max) {
            max = (num % 10)
        }
        num = num / 10;
    }
    return max;
}

