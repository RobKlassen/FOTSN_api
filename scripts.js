FOTSN = {};

FOTSN.updatePlanetPos = function(cyclenum, planet, planetWidth, tempColor, WIDTHFACTOR){

    const currentSinPos = (Math.sin(cyclenum / (180 / Math.PI)) * WIDTHFACTOR);
    const currentCosPos = (Math.cos(cyclenum / (180 / Math.PI)) * WIDTHFACTOR);
    // console.log(currentSinPos); 
    // console.log(currentCosPos); 

    const planetStyle = {
        "background-color" : tempColor,
        "width" : (planetWidth) + "px",
        "height" : (planetWidth) + "px",
        "border-radius" : "50%",
        // "right" : ((currentSinPos)) + "px", 
        "right" : (((planetWidth + currentSinPos) / 2) - planetWidth) + "px", 
        // "bottom" : ((currentCosPos)) + "px" 
        "bottom" : (((planetWidth + currentCosPos) / 2) - planetWidth) + "px" 
    }
    planet.classList.add("body");
    Object.assign(planet.style, planetStyle);
}

FOTSN.createBody = function(tempColor, bodySize, ROTATIONSPEED, WIDTHFACTOR){
    const solarSystem = document.querySelector(".origin");
    const planetWidth = bodySize*100;
    const planet = document.createElement("div");
    solarSystem.append(planet);
    
    let increment = 0;  

    const myTimer = function(){
        if (increment < 10000){
            window.requestAnimationFrame(myTimer);
            FOTSN.updatePlanetPos(increment, planet, planetWidth, tempColor, WIDTHFACTOR);
            increment = increment + ROTATIONSPEED;
        } else {
            console.log("we did it");
        }

    };
    window.requestAnimationFrame(myTimer);
}

FOTSN.callAPI = async function(){
    const endpointURL = new URL('https://stevemould.com/api');
    let res = await fetch(endpointURL);
    let myData = await res.json();
    return myData;
}

FOTSN.init = async function(){    
    // let apiData = await FOTSN.callAPI();

    const steveViewCount = 100;
    const mattViewCount = 77;
    // const steveViewCount = apiData.viewsData.SteveCount;
    // const mattViewCount = apiData.viewsData.MattCount;

    let countRatio;
    let steveCountAdjusted;
    let mattCountAdjusted;


    if (steveViewCount > mattViewCount){
        countRatio = mattViewCount / steveViewCount;
        steveCountAdjusted = 1;
        mattCountAdjusted = countRatio;
    } else {
        countRatio = steveViewCount / mattViewCount;
        mattCountAdjusted = 1;
        steveCountAdjusted = countRatio;
    }

    // console.log("Steve abs", steveViewCount, ",,, matt abs", mattViewCount);
    // console.log("steve", steveCountAdjusted,",,, matt",mattCountAdjusted);
    
    /*
    FIRST NUM IS ROTATION SPEED, 1 is pretty quick already
    SECOND NUM IS WIDTH, 150 is pretty small still
    */

    // FOTSN.createBody(steveCountAdjusted, 0.5, 350);
    // FOTSN.createBody(mattCountAdjusted, 1, 150);

    FOTSN.createBody("red", 0.2, 1, 100);
    FOTSN.createBody("pink", 0.5, 0.3, 250);
    FOTSN.createBody("yellow", 1, 0.1, 450);
    FOTSN.createBody("white", 0.6, 0.09, 650);
    FOTSN.createBody("green", 0.6, 0.05, 750);
    FOTSN.createBody("blue", 0.1, 1.5, 50);

}

FOTSN.init();