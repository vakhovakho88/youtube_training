// let us create an array ob objects
const items = [
    {name: 'Bike',        price: 100},
    {name: 'TV',          price: 200},
    {name: 'Album',       price: 10},
    {name: 'Book',       price: 5},
    {name: 'Phone',       price: 500},
    {name: 'Computer',    price: 1000},
    {name: 'Keyboard',    price: 25}
];


// 1. filter method
// find all the items, their price <= 100
// the parameter of this method  is a predicate
const filteredItems = items.filter((item)=>{
    return item.price <= 100
});


// 2. map is like foreach
// map allows us to take an array und convert it into an another array with modified values

// get only names from items
const itemNames = items.map((item)=>{
    return item.name
});



// 3. find: This method allows us to find an sigle Object in the array, it returns the very first item
const foundItem = items.find((item)=>{
    return item.name === 'Book' 
})



// 4. forEach does not return anything, we can just go throug the array
// Let us just print the names of the items
items.forEach((item)=>{
    console.log(item.name)
})


// 5. some returns boolean value and checks if our condition is true at least one time
// let us check if the array contains items , their price is <= 100
const hasInexpensiveItems = items.some((item)=>{
    return item.price <= 100
})


// 6. every is just like some method, but it checks if the condition is true for all the elements of an array
const areAllItemsInexpensive = items.every((item)=>{
    return item.price <= 100
})

// 7. reduce method returns new array, it helps us to go throug an array and accumulate the items
// reduce((accumulator,item)=> {method}, starting value of an accumulator)

// let us make the reduce method to calculate the sums of all prices, accumulator starting value = 0
const sumOfPrices = items.reduce((sum,item)=>{
    return sum + item.price
}, 0)


// let us sum all the prices they are lower or equal to 100
const sumOfInexpensivePrices = items.reduce((sum,item)=>{
    //if it is higher than 100 don't add anything 
    if (item.price>100){
        return sum;
    }

    return sum+item.price
},0)


// 8. includes, returns boolean value just checks in an array includes an element
const numbers = [1,2,3,4,5,6,7,8];
const includesTwo = numbers.includes(2);