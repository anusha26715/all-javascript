// tuesday : (1:30pm-1:53pm)

// A Program to convert starting letter of each word in a sentence to uppercase
const string = "my name is anusha"
const splitString = string.split(' ')

for (let i=0;i<splitString.length;i++){
  let word = splitString[i]
  word = word[0].toUpperCase()+word.slice(1)
  splitString[i] = word
}

console.log(splitString.join(" "))


// A Program to convert starting letter of last word in a sentence to uppercase

const splittedString = string.split(' ')
let word = splitString[splittedString.length-1]

 word = word[0].toUpperCase().concat(word.slice(1))
 splittedString[splittedString.length-1] = word
 
console.log(splittedString.join(' '))