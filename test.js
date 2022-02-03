let addresses = [
	"Rocky",
	"10 Rocky",
	"10 River",
	"100 Rocky",
	"100 River",
	"99 rocky",
	"98 river"
]
// Sort street addresses - by street name, then by optional street number
function StreetSort(a,b) {

	function parseStreetAddress(adrs){
	let numRE = /^(\d*)/ig // match leading digits
	let aObj = numRE.exec(adrs)	// locate leading digits
	let num = ""
	let street = ""
	if (aObj == null)
		street = adrs
	else  {
		num = aObj[1]
		street = adrs.substr(num.length).trim().toLowerCase()
	}
return {num, street}
	}

let aStreet = parseStreetAddress(a)
	let bStreet = parseStreetAddress(b)

	// both num and street properties are still strings

	if (aStreet.street < bStreet.street) return -1
	if (aStreet.street > bStreet.street) return 1

	// compare length of strings - shorter numeric strings are always less
	if (aStreet.num.length < bStreet.num.length) return -1
	if (aStreet.num.length > bStreet.num.length) return 1

	if (aStreet.num == bStreet.num) return 0

	return parseInt(aStreet.num) - parseInt(bStreet.num)
}
addresses.sort(StreetSort)
console.log(JSON.stringify(addresses))
