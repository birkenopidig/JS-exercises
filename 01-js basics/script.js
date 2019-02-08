window.addEventListener("load", visAreal);

const height = 5;
const width = 50;
let areal = height * width;



function visAreal() {
    console.log("Arealaet er" + areal);
    document.querySelector("#areal").innerHTML = areal;
    checkAreal()
}

function checkAreal() {
    console.log("checker areal");
    if(areal < 100){
        console.log("Arealet er for lille");
          document.querySelector("#areal_check").innerHTML = "Arealet er for lille";  
    }
    
    else if(areal >= 100 && areal<200 ){
        console.log("Arealet er ok");
          document.querySelector("#areal_check").innerHTML = "Arealet er ok";  
    }
    
    else if(areal >= 100){
        console.log("Arealet er ok");
          document.querySelector("#areal_check").innerHTML = "Arealet er for stort"; 
}
    goddag();
}

function goddag(){
    let navn = prompt("Hvad er dit navn?");
    alert("H    ej " + navn); 
}
