const {isSimple, getBiggestNumber} = require('./funtions')

describe('Test of isSimple function', ()=> {
    test('10', ()=> {
        expect(isSimple(10)).toBe(false)
    })
    test('7', ()=> {
        expect(isSimple(7)).toBe(true)
    })
})

describe('Test of getBiggestNumber function', ()=> {
    test('195', ()=> {
        expect(getBiggestNumber(195)).toBe(9)
    })
    test('1', ()=> {
        expect(getBiggestNumber(1)).toBe(1)
    })
    test('999', ()=> {
        expect(getBiggestNumber(9)).toBe(9)
    })
})
