// Day-4 Task-2     (JavaScript file)
// The corresponding html file is named as Day4Task2.html

console.log("------------------Day-4 Task-2------------------")


// Step-1: To create an xhr (XMLHttpRequest) object
var theRequestIs = new XMLHttpRequest()

// Step-2: To open connection
// The link is taken from the Day-4 class
theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequestIs.open('GET',theReqUrl)
theRequestIs.send()
theRequestIs.onload = function(){
    var ContrDat = JSON.parse(theRequestIs.response);
    for(let i=0; i< ContrDat.length;i++){
        console.log(ContrDat[i].flag)
    }
}
