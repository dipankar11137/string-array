const products = [
    'Dell hardcore i29 laptop',
    'iphone 1TB camera phone',
    'Yellow laptop with camera',
    '1x59 lenevo commercial yoga laptop',
    'dell LG supernova laptop',
    'dell HTC low price Phone',
    'purple color phone with Laptop'
];

// const searching = 'laptop';

/* 
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);
 */

// 2nd way
/* const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output); */

// starts with value of string 


const searching = 'dell';
const output = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);