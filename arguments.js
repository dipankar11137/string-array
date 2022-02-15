// icca moto number sum korbo 
function addNumbers() {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNumbers(23, 33, 23, 4, 5, 6, 89, 6, 11);
console.log(sum);

function getFullName() {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}

const PuroName = getFullName('Abul', 'Basar', 'Siddik', 'Lalu', 'Lal', 'Dalal');
console.log(PuroName);