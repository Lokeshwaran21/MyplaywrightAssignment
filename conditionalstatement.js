var browserName = "Chrome"



function launchBrowser(browserName){
    if (browserName === "Chrome"){
        console.log("broser fetched is chrome")
    }
    else   {
        console.log("broser fetched is not a chrome")    
    } 
}

function runTests(testingType){
    switch (testingType){
        case "sanity":
            console.log("Testing type is Sanity")
        break;
        case "regression":
            console.log("Testing type is regression")
        break;
        default :
            console.log("Testing type is smoke")       
    }

}



launchBrowser(browserName)
var testingType = "sanity"
runTests(testingType)