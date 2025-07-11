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

    console.log(fahrenheitData);
  

    // 11.2- Find days with rain

    const rainyDays = weatherData.filter(item => item.condition === "Rainy");

    console.log(rainyDays);

    // 11.3- Calculate average temperature

    const avgTemp = weatherData.reduce((a,c)=>a+c.temperature,0)

    console.log(avgTemp/weatherData.length)

    // 11.4- Print Highest and Lowest Temperature

    const tempList = weatherData.map(each=>each.temperature)
    const max = Math.max(...tempList)
    const min = Math.min(...tempList)
    
    const list = weatherData.filter(each => each.temperature === max || each.temperature === min)
    console.log(list)

    // 11.5- Filter out the day where condition is sunny

    const filterDay = weatherData.filter(each => each.condition === "Sunny")
    console.log(filterDay)


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

console.log(extracted)

// 9. Create the function which iterates through the array of objects and
//  sum all the marks present in each object.

const classes= [
    {name: "James", marks: 10},
    {name: "Alan", marks: 8}
]; 

let sum = 0
classes.forEach((each) => sum+=each.marks)

console.log(sum)

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


console.log(flexibleSort(users, "age")); 

// time: 2:57pm


