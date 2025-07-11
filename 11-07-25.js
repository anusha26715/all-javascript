// time:12:30pm


// 11.Retriving data from the database

const weatherData = [  
    { date: "2025-03-01", temperature: 28, humidity: 65, precipitation: 0, windSpeed: 8, condition: 
    "Sunny" },  
    { date: "2025-03-02", temperature: 32, humidity: 70, precipitation: 0, windSpeed: 5, condition: 
    "Sunny" },  
    { date: "2025-03-03", temperature: 30, humidity: 75, precipitation: 0.5, windSpeed: 12, 
    condition: "Partly Cloudy" },  
    { date: "2025-03-04", temperature: 25, humidity: 80, precipitation: 2.1, windSpeed: 15, 
    condition: "Rainy" },  
    { date: "2025-03-05", temperature: 22, humidity: 85, precipitation: 1.5, windSpeed: 10, 
    condition: "Rainy" },  
    { date: "2025-03-06", temperature: 26, humidity: 75, precipitation: 0, windSpeed: 7, condition: 
    "Cloudy" },  
    { date: "2025-03-07", temperature: 29, humidity: 65, precipitation: 0, windSpeed: 6, 
    condition: "Sunny" }  
    ]; 


    // 11.1- Convert temperatures to Fahrenheit and format data. [(temperature * 9/5) + 32)]

    function formatData(item){
        return {...item,temperature:`${(item.temperature *9/5) + 32}°F`}
    }

    const fahrenheitData = weatherData.map(item => {
        return formatData(item);
    })

    // console.log(fahrenheitData);
  

    // 11.2- Find days with rain

    const rainyDays = weatherData.filter(item => item.condition === "Rainy");

    // console.log(rainyDays);

    // 11.3- Calculate average temperature

    const avgTemp = weatherData.reduce((a,c)=>a+c.temperature,0)

    // console.log(avgTemp/weatherData.length)

    // 11.4- Print Highest and Lowest Temperature

    const tempList = weatherData.map(each=>each.temperature)
    const max = Math.max(...tempList)
    const min = Math.min(...tempList)
    
    const list = weatherData.filter(each => each.temperature === max || each.temperature === min)
    // console.log(list)

    // 11.5- Filter out the day where condition is sunny

    const filterDay = weatherData.filter(each => each.condition === "Sunny")
    // console.log(filterDay)


//  10. Write a function to extract the names and marks from the array object in which marks are 
// greater than 5 using map and filter.


const class1 = [
    {
        name:"Alex",
        parentName:"Jack",
        age:15,
        marks:7,
        contact:1234567898,
    },
    {
        name:"Mark",
        parentName:"Joey",
        age:15,
        marks:4,
        contact:1234567788,
    },
    {
        name:"Trunks",
        parentName:"Alpha",
        age:15,
        marks:6,
        contact:1234567389,
    }
]

const filtered = class1.filter((each)=>each.marks>5)
const extracted = filtered.map(each => ({name:each.name,marks:each.marks}))

// console.log(extracted)

// 9. Create the function which iterates through the array of objects and
//  sum all the marks present in each object.

const classes= [
    {name: "James", marks: 10},
    {name: "Alan", marks: 8}
]; 

let sum = 0
classes.forEach((each) => sum+=each.marks)

// console.log(sum)

// 8. Create a function that uses sort() with custom comparator 
// functions based on a specified property. 


const users = [  
    { name: "Bob", age: 25 }, 
    { name: "Alice", age: 30 }, 
    { name: "Charlie", age: 35 }  
    ];
function flexibleSort(users,key){
    return users.sort((a, b) => {
        if (typeof a[key] === "number" && typeof b[key] === "number") {
            return a[key] - b[key];
        } else {
            return String(b[key]).localeCompare(String(a[key]));
        }
    });
}


// console.log(flexibleSort(users, "age")); 

// time: 2:57pm


// time: 4:20pm


// 7. Create a function that calculates the distance between the first
//  and last occurrence of an element in an array. 

const chars = ['a', 'b', 'c', 'd','b', 'a', 'e', 'a'];

function elementSpan(chars, char){
    const firstIndex = chars.indexOf(char)
    const lastIndex = chars.lastIndexOf(char)
    if (firstIndex === -1 || firstIndex === lastIndex) return 0;
    return (lastIndex - firstIndex)-1
}

// console.log(elementSpan(chars, 'd')); 

// 6. Write a function that finds all occurrences of an element in an array. 
const nums = [1, 2, 3, 1, 4, 1, 5]; 

function findAllOccurrences(nums, num){
    let index = []
    for (let i=0;i<nums.length;i++){
        if(nums[i] === num) index.push(i);
    }
    if(index.length === 0) index = "no occurance";
    return index
}
// console.log(findAllOccurrences(nums, 1));


// 5. Create a function that uses both some() and every() to check if an array of numbers 
// contains at least one even number and all numbers are positive.

function checkArrayProperties(arr){
    let result = {hasEven:false,allPositive:false}
    let con1 = arr.some(each => each%2 === 0);
    let con2 = arr.every(each => each>0)
    result.hasEven = con1
    result.allPositive = con2
    return result
}


// console.log(checkArrayProperties([1, 3, 5, 9, 2])); 


// 4. Create a function that finds the intersection of two arrays (elements present in both arrays) 
// using filter() and includes().

const array1 = [1, 2, 3, 4, 5];  
const array2 = [3, 4, 5, 6, 7];

function getIntersectElements(arr1,arr2){
    let combined = arr1.concat(arr2)
    let unique = [...new Set(combined)]
    const result = unique.filter(each => arr1.includes(each) && arr2.includes(each))
    return result
}

// console.log(getIntersectElements(array1,array2))

// 3. Write a function that replaces a segment of an array with new values using splice(). 
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const res = colors.splice(1,2,"Purple","Pink")
// console.log(colors)


// 2. Create a function that splits an array into chunks of a specified 
// size using the slice() method. 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9,5];  

function chunkArray(numbers, numb){
    const chunkArr = []
    let startCount = 0
    let endCount = numb 
    for(let i=0;i<Math.ceil(numbers.length/numb);i++){
        chunkArr.push(numbers.slice(startCount,endCount))
        startCount += numb
        endCount += numb
    }
    return chunkArr
}
// console.log(chunkArray(numbers, 4));  


// 1. Write a function that removes all duplicate elements from an array in-place using the 
// splice() method. 
const array = [1, 2, 2, 3, 4, 4, 5];

function getOccurance(arr,j){
    let occurance = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] === j){
            occurance.push(i)
        }
    }
    return occurance.length
}
function removeDuplicates(array){
    const obj = {}
    for(let i=0;i<array.length;i++){
        let count = getOccurance(array,array[i])
        obj[array[i]] = count
    }
}

removeDuplicates(array);  
console.log(array); 

// time:-7:07pm