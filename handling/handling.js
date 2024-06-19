function checkEmptyArray(arr) {
    if (arr.length === 0) {
        throw new Error('Массив пустой!'); 
    }
    
}

try {
    let emptyArray = [];
    checkEmptyArray(emptyArray);
    console.log('массив пустой');

} catch (error) {
    console.error('Ошибка:', error.message);
}

try {
    let nonEmptyArray = [1, 2, 3];
    checkEmptyArray(nonEmptyArray);
    console.log('массив не пустой');

} catch (error) {
    console.error('Ошибка:', error.message);
}
