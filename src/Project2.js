/* Project 2
 * Andrew Brown & Adam Dempsey
 * Using the API for the Adult Arrests 18 and Older by
 * County: Beginning 1970 dataset from data.ny.gov and
 * the API for 
 */

/*
async function processNYData( filterFunction,  params) {

    let url = new URL("https://data.ny.gov/resource/rikd-mt35.json?year=2020");

    let searchParams = new URLSearchParams();
    searchParams.set('year','2020');
    url.search = searchParams;

    const myHeaders = new Headers();
    const  results = new Array();
    myHeaders.append('X-App-Token','ldo8TzZopzdrICukwmoCIb4PX')
    const response = await fetch( url.toString(), {
            method: 'GET',
            headers: myHeaders,
    }).then( (response) => { 
            if ( response.ok ) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
          })
      .then((json) => {
        console.log( json );
        let rs = filterFunction( params, json );
        results.push(...rs);
     });
     return results;
}


function noFilterNY( params, json ) {

    let results = new Array();
    return json;
}

function fetchCensusData(){
    let results = new Array();
    fetch("https://api.census.gov/data/2020/dec/pl?get=NAME&P1_001N&for=COUNTY:*&key=e5e4b322e57046dac2afb3d07b8f7d9df48fc197")
    .then(response=> {
        return response.json();
    })
    .then(data => results.push(data));
    return results;
}
 */

export async function getCensusData() {
    fetch ("https://api.census.gov/data/2020/dec/pl?get=NAME&P1_001N&for=COUNTY:*&key=e5e4b322e57046dac2afb3d07b8f7d9df48fc197",{
        method: "GET",
        searchParams: {"year":"2020"}
    })
    .then(response=> response.json())
    .then(data=> console.log(data));
}

export async function getNYData() {
    fetch ("https://data.ny.gov/resource/rikd-mt35.json?year=2020",{
        searchParams: {"year":"2020"},
        method: "GET",
    })
    .then(response=> response.json())
    .then(data=> console.log(data));
}
