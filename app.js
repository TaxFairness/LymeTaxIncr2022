d3.csv('TaxIncrease.csv').then(function (data) {
    // console.log(data);

    var movies = data

    var button = d3.select('#button')

    var form = d3.select('#form')

    button.on('click', runEnter)
    form.on('submit', runEnter)

    function runEnter() {
        d3.select('tbody').html('')
        d3.selectAll('p').classed('noresults', true).html('')
        d3.event.preventDefault()
        var inputElement = d3.select('#user-input')
        var inputValue = inputElement.property('value').toLowerCase().trim()

        // console.log(inputValue.length);
        // console.log(movies);
        if (inputValue.length < 6) {
            d3.select('p')
                .classed('noresults2', true)
                .html(
                    '<center><strong>Please try using more than 5 characters to avoid too many results!</strong>'
                )
            inputValue = 'Something to give no results'
        }
        var filteredData = movies.filter((movies) =>
            movies.actors.toLowerCase().trim().includes(inputValue)
        )
        // console.log(filteredData.length)
        if (
            filteredData.length === 0 &&
            inputValue !== 'Something to give no results'
        ) {
            d3.select('p')
                .classed('noresults', true)
                .html(
                    '<center><strong>No results. Please check your spelling!</strong>'
                )
        }
        output = _.sortBy(filteredData, StreetSort)

        for (var i = 0; i < filteredData.length; i++) {
            // console.log(output[i]['original_title'])
            // console.log(output[i]['avg_vote'])
            // d3.select("tbody>tr>td").text(output[i]['original_title']);
            d3.select('tbody')
                .insert('tr')
                .html(
                    '<td>' +
                        [i + 1] +
                        '</td>' +
                        '<td>' +
                        '<a href=https://www.imdb.com/title/' +
                        output[i]['imdb_title_id'] +
                        " target='_blank'>" +
                        output[i]['original_title'] +
                        '</a>' +
                        '</td>' +
                        '<td>' +
                        output[i]['avg_vote'] +
                        '</td>' +
                        '<td>' +
                        output[i]['year'] +
                        '</td>' +
                        '<td>' +
                        output[i]['director'] +
                        '</td>' +
                        '<td>' +
                        output[i]['description'] +
                        '</td>'
                )
        }
    }
    window.resizeTo(screen.width, screen.height)
})

// Sort street addresses - by street name, then by optional street number
function StreetSort(a,b) {

    function parseStreetAddress(adrs){
        let numRE = /^(\d*)/ig // match leading digits
        let theAdrs = adrs.original_title
        // console.log("theAdrs: %s",theAdrs, JSON.stringify(adrs))
        let aObj = numRE.exec(theAdrs)	// locate leading digits
        let num = ""
        let street = ""
        if (aObj == null)
            street = theAdrs
        else  {
            num = aObj[1]
            street = theAdrs.substr(num.length).trim().toLowerCase()
        }
        return {num, street}
    }
    console.log("a:" + JSON.stringify(a))
    console.log("b:" + JSON.stringify(b))
    if (typeof b != 'object') return 1

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
