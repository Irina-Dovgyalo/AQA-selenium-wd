// Цель блока: изучить базовые assetions - сравнение ожидаемого результата с фактическим 
// + сравнение двух чисел
// + сравнение двух строк на полное совпадение
// + сравнение двух строк на частичное совпадени(содержит)
// + сравнение массивов
// + сравнить массив строк 
// - изучене всех ассершинов инструмента

describe('Code to understand assertions', function() {

    it('should check numbers', function() { 
        expect(2).toEqual(2);
        expect(1).not.toEqual(3);
        expect(5).toBeGreaterThan(1);
        expect(2).toBeLessThan(4);
    });
 
    it('should check the complete comparison of strings', function() { 
        expect('hello world').toEqual('hello world'); 
        expect('hello world').toBe('hello world'); // '==='
    });

    it('should check the partial comparison of strings', function() { 
        expect('hello world, you are the best').toContain('hello world'); 
        expect('test (test) with other stuff').toMatch('\(test\)');
        expect('other string').toMatch('her');
    });

    let arr1 = [1, 2, 3];
    let arr2 = [1, 2, 3];

    it('should check arrays of numbers', function() { 
        expect([1, 2, 3]).toEqual([1, 2, 3]); 
        expect(arr1).toEqual(arr2); 
        expect(arr1).toBe(arr1); 
        expect([1, 2, 3]).not.toBe([1, 2, 3]); // ===
        expect(arr1).not.toBe(arr2); // ===
        expect([1, 2, 3]).not.toEqual([3, 2, 1]); 
        expect([1, 2, 3]).toContain(3); 
    });

    let arrStr1 = ['a', 'b', 'c'];
    let arrStr2 = ['a', 'b', 'c'];
    let arrStr3 = ['a', 'b', 'c', 'd'];

    it('should check arrays of strings', function() { 
        expect(['a', 'b', 'c']).toEqual(['a', 'b', 'c']); 
        expect(arrStr1).toEqual(arrStr2); 
        expect(arrStr1).toBe(arrStr1); 
        expect(arrStr1).not.toBe(arrStr2); 
        expect(['a', 'b', 'c']).not.toEqual(['a', 'b', 'c', 'd']); 
        expect(['a', 'b', 'c']).toContain('c'); 
    });

  });