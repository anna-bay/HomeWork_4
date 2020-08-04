const palindrom = (str) =>{
	let splitSTR = str.split("").reverse().join("")
	
		if(splitSTR == str){
			return true
		}
	
		return false

}
console.log(palindrom("qaxaq"))
console.log(palindrom("hamakarg"))
