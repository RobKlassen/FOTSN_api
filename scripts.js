FOTSN = {};

FOTSN.updatePlanetPos = function(cyclenum, planet, planetWidth, tempColor, WIDTHFACTOR){
    const currentSinPos = (Math.sin(cyclenum / (180 / Math.PI)) * WIDTHFACTOR);
    const currentCosPos = (Math.cos(cyclenum / (180 / Math.PI)) * WIDTHFACTOR);
    const positionX = (((planetWidth + currentSinPos) / 2) - planetWidth);
    const positionY = (((planetWidth + currentCosPos) / 2) - planetWidth);

    const planetStyle = {
        "background-color" : tempColor,
        "width" : (planetWidth) + "px",
        "height" : (planetWidth) + "px",
        "border-radius" : "50%",
        // "right" : ((currentSinPos)) + "px", 
        "right" : positionX + "px", 
        // "bottom" : ((currentCosPos)) + "px" 
        "bottom" :  positionY + "px" 
    }
    planet.classList.add("body");
    planet.coordinates = [currentSinPos, currentCosPos];
    Object.assign(planet.style, planetStyle);

    // return coordinates;
    // let distToOrigin = 0;
    // console.log(distToOrigin);

}

FOTSN.createBody = function(tempColor, bodySize, ROTATIONSPEED, WIDTHFACTOR){
    const solarSystem = document.querySelector(".origin");
    const planetWidth = bodySize*100;
    const planet = document.createElement("div");
    solarSystem.append(planet);
    let increment = 0;  

    let myCoords;

    const myTimer = function(){
        window.requestAnimationFrame(myTimer);
        myCoords = FOTSN.updatePlanetPos(increment, planet, planetWidth, tempColor, WIDTHFACTOR);
        increment = increment + ROTATIONSPEED;
        if (increment >= 360){
            increment = increment % 360;
        } 
        // console.log(myCoords);
        // return myCoords;
    };
    window.requestAnimationFrame(myTimer);
    // return myCoords;
}

FOTSN.callAPI = async function(){
    const endpointURL = new URL('https://stevemould.com/api');
    let res = await fetch(endpointURL);
    let myData = await res.json();
    return myData;
}

FOTSN.init = async function(){    
    // let apiData = await FOTSN.callAPI();

    // const steveViewCount = 100;
    // const mattViewCount = 77;
    // const steveViewCount = apiData.viewsData.SteveCount;
    // const mattViewCount = apiData.viewsData.MattCount;

    // let countRatio;
    // let steveCountAdjusted;
    // let mattCountAdjusted;


    // if (steveViewCount > mattViewCount){
    //     countRatio = mattViewCount / steveViewCount;
    //     steveCountAdjusted = 1;
    //     mattCountAdjusted = countRatio;
    // } else {
    //     countRatio = steveViewCount / mattViewCount;
    //     mattCountAdjusted = 1;
    //     steveCountAdjusted = countRatio;
    // }

    // console.log("Steve abs", steveViewCount, ",,, matt abs", mattViewCount);
    // console.log("steve", steveCountAdjusted,",,, matt",mattCountAdjusted);
    // FOTSN.createBody(steveCountAdjusted, 0.5, 350);
    // FOTSN.createBody(mattCountAdjusted, 1, 150);
    
/*===================================================================*/
/*===================================================================*/
/*  FIRST PARAM IS COLOUR
    SECOND PARAM IS SIZE
    THID PARAM IS ROTATION SPEED, 1 is pretty quick already
    FOURTH PARAM IS WIDTH, 150 is pretty small still */

/*- - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - */

    FOTSN.createBody("white", 0.1, 0, 0);
    FOTSN.createBody("red", 0.2, 1, 100);
    FOTSN.createBody("pink", 0.5, 0.3, 250);
    // FOTSN.createBody("yellow", 1, 0.1, 450);
    // FOTSN.createBody("white", 0.6, 0.09, 650);
    // FOTSN.createBody("white", 0.3, 0.2, 150);
    // FOTSN.createBody("green", 0.6, 0.05, 750);
    // FOTSN.createBody("blue", 0.1, 1.5, 50);
    // console.log(coords1);
    // console.log(this);
    const testButton = document.getElementById("testButt");
    testButton.addEventListener('click', function(){
        const listOfPlanets = document.querySelectorAll('.body');
        
        for(i=0; i<listOfPlanets.length; i++){
            const currentPlanetCoords = listOfPlanets[i].coordinates;
            
            // console.log(listOfPlanets[i]);
        }
        
        // listOfPlanets.forEach((planet) => {
        //     console.log(planet);
        //     console.log(planet.coordinates);
        // });
    });
/*===================================================================*/
/*===================================================================*/
    
}

FOTSN.init();