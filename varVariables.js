const browserversion = "Chrome"

function getBrowserVersion(){
    if (browserversion === "Chrome") {
        var browserversion = "chrome let"
        console.log("Inside block:",browserversion)        
    }
    console.log("Inside function:",browserversion) 
}


getBrowserVersion()
console.log("global value:",browserversion)