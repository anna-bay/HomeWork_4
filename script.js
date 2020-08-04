const palindrom = (str) =>{
	let splitSTR = str.split("").reverse().join("")
	
		if(splitSTR == str){
			return true
		}
	
		return false

}
console.log(palindrom("qaxaq"))
console.log(palindrom("hamakarg"))

/////////////////////////////////////////
const bigDigit = (number) =>{
	let digit = number.split("")
	let max = digit[0]
	for (let i = 0; i < digit.length; i++) {
		if(digit[i]>max){
			max = digit[i]
		}
	}
	
	return max
}

console.log(bigDigit("37"))

//////////////////////////////////////////////////////////////

const words = (string) =>{
	let splitByWord = string.split(" ")
	return splitByWord
}

console.log(words("I love JavaScript so much"))

//////////////////////////////////////////////////
// 1. Write a JavaScript program to split values of two given arrays into two groups. 
// If an element in filter is truthy, the corresponding element in the collection 
// belongs to the first group; otherwise, it belongs to the second group.

// This task was not clear for me
