// tuesday : (1:30pm-1:53pm)
// string methods

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

// at, charCodeAt, match and matchAll, padStart, padEnd, search, substr and subString
// "at(index)" string method
// Returns the character at the given position (supports negative indexing).

const str = "JavaScript";
console.log(str.at(2));     // Output: "v"
console.log(str.at(-1));    // Output: "t"

// charCodeAt(index)
// Returns the Unicode (ASCII) value of the character at the given position.


const strings = "ABC";
console.log(strings.charCodeAt(0));  // Output: 65 (Unicode for 'A')

// substr(start, length) (Deprecated)
// Extracts a substring starting at start for length characters.
const words = "JavaScript";
console.log(words.substr(4, 6));  // Output: "Script"


// substring(start, end)
// Returns characters from start index to end index (excluding end).

const strr = "JavaScript";
console.log(strr.substring(4, 10));  // Output: "Script"


// search(regex)
// Returns the index of the first match. Returns -1 if not found.

const str1 = "I love JavaScript";
console.log(str1.search(/Java/));  // Output: 7
console.log(str1.search(/Python/)); // Output: -1


// padStart(targetLength, padString)
// Pads the beginning of the string until it reaches the desired length.

const str2 = "7";
console.log(str2.padStart(3, "0"));  // Output: "007"


// padEnd(targetLength, padString)
// Pads the end of the string until it reaches the desired length.

const str3 = "7";
console.log(str3.padEnd(3, "0"));  // Output: "700"


// match(regex)
const str4 = "cat, bat, rat";
const result = str4.match(/at/);
console.log(result);
// output
// [
//   'at',                  // ✅ 1. The matched text
//   index: 1,              // ✅ 2. Where the match starts in the string
//   input: 'cat, bat, rat',// ✅ 3. The original input string
//   groups: undefined      // ✅ 4. Any named capturing groups (none here)
// ]

// Explanation in detail:
// Part	                               What it Means
// 'at'	   The actual matched string. In this case, it's the first "at" that appears in "cat".
// index:  1	This tells you the starting position of the match in the string. So "at" starts at index 1 in "cat".
// input:  'cat, bat, rat'	The original string you searched in.
// groups: undefined	If you had named capturing groups in your regex, they'd appear here. You don’t have any, so it’s undefined.



// matchAll(regex)
//  Purpose:
// Used when you want to:

// 1)Find all matches (like match with g)

// 2)Also access match groups and positions

// 3)Returns an iterator, not an array — so you must loop over it or convert it.

//  Example with matchAll() and capturing group
const str5 = "apple1, apple2, apple3";
const regex = /apple(\d)/g;
const matches = str5.matchAll(regex);

for (const match of matches) {
  console.log(match);
}
// 🔸 Output:

// [ 'apple1', '1', index: 0, input: 'apple1, apple2, apple3', groups: undefined ]
// [ 'apple2', '2', index: 8, input: 'apple1, apple2, apple3', groups: undefined ]
// [ 'apple3', '3', index: 16, input: 'apple1, apple2, apple3', groups: undefined ]

// **Each match includes:
// -The full match (apple1)
// -Captured group (1)
// -Index (where it starts)

// Summary: match() vs matchAll()

// Feature	              match()	                            matchAll()
// Returns	         Array or null	                 Iterator (you loop through it)
// Global support	   Needs g flag for all matches	   Must use g flag
// Capture groups	   Only for first match	           For all matches
// Usecase	         Simple matching	               Advanced matching with groups/positions

