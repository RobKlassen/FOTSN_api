FOTSN = {};

FOTSN.createBody = function(numBodies){
    const solarSystem = document.querySelector(".planetBox");
    for(i = 0; i<numBodies; i++){
        let randColorDataPoint1 = Math.ceil(Math.random()*255);
        let randColorDataPoint2 = Math.ceil(Math.random()*255);
        let randColorDataPoint3 = Math.ceil(Math.random()*255);
        // let randPos = (Math.ceil(Math.random()*101) - 1);

        randomColor = `rgb(${randColorDataPoint1}, ${randColorDataPoint2}, ${randColorDataPoint3})`;
        
        
        const planetStyle = {
            "background-color" : String(randomColor),
            "width" : "100px",
            "height" : "100px",
            // "top" : String(randPos + "% - 50px"),
            // "bottom" : String(randPos + "% - 50px")
        }

        const planet = document.createElement("div");
        planet.classList.add("planetNum" + i, "body");
        Object.assign(planet.style, planetStyle);
        solarSystem.append(planet);
    }
}

FOTSN.callAPI = async function(){
    const endpointURL = new URL('https://stevemould.com/api');
    // let myData = FOTSN.getData(endpointURL);
    let res = await fetch(endpointURL);
    let myData = await res.json();
    return myData;
}

FOTSN.init = async function(){    
    // let apiData = await FOTSN.callAPI()
    // console.log(apiData);
    // console.log(apiData.subsData);
    // console.log(apiData.viewsData);
    // console.log(apiData.viewsData.SteveCount);

    FOTSN.createBody(20);

}

FOTSN.init();