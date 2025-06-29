// start time: 6:22PM

// Armstrong Number
const checkArmstrong = (n) =>{
  const strNum = n.toString()
  const strNumAry = strNum.split('')
  let sum = 0
  for (let i of strNumAry){
    sum += parseInt(i)**3
  }
  if (sum === n){
    return `${n} is Armstrong!!`
  } else {
    return `${n} is not Armstrong!!`
  }
}

const arry = [12,1,34,153,267,535,28]

arry.forEach(each => console.log(checkArmstrong(each)))

// palindrome or not

function checkPalindrome(n){
    const strNumb = n.toString()
    const listNum = strNumb.split('')
    let reversedNum = ''
    for( let i=listNum.length-1;i>=0;i-- ){
        reversedNum += listNum[i]
    }
    if (reversedNum === strNumb){
        return `${n} is Palindrome`
    } else {
        return `${n} is not a Palindrome`
    }
}

arry.forEach(each => console.log(checkPalindrome(each)))


// special number or not

const checkSpecial = (n) =>{
    let factList = []
    for (let i=1;i<n;i++){
        if(n%i === 0){
            factList.push(i)
        }
    }
    let factSum = 0
    for(let i of factList){
        factSum += i
    }
    if(factSum === n){
        return `Hoorrey!! ${n} is a special number`
    } else {
        return `Darn!! ${n} is not a special number`
    }
}

arry.forEach(each => console.log(checkSpecial(each)))

// end time: 7:29PM