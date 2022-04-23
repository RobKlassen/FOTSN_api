FOTSN = {};

FOTSN.createBody = function(numBodies){
    const solarSystem = document.querySelector(".planetBox");
    for(i = 0; i<numBodies; i++){
        let randColorDataPoint1 = Math.ceil(Math.random()*255);
        let randColorDataPoint2 = Math.ceil(Math.random()*255);
        let randColorDataPoint3 = Math.ceil(Math.random()*255);
        let randPosX = (Math.ceil(Math.random()*81) - 1);
        let randPosY = (Math.ceil(Math.random()*81) - 1);

        randomColor = `rgb(${randColorDataPoint1}, ${randColorDataPoint2}, ${randColorDataPoint3})`;
        
        
        const planetStyle = {
            "background-color" : String(randomColor),
            "width" : "100px",
            "height" : "100px",
            // "top" : "calc(50% - 50px)",
            "left" : String("calc(" + randPosX + "%)"),
            // "left" : String("calc(" + randPosX + "% - 50px)"),
            "top" : String("calc(" + randPosY + "%)"),
            // "top" : String("calc(" + randPosY + "% - 50px)"),
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
    
    const addBox = document.getElementById("addbox");
    const add20Box = document.getElementById("add20box");
    const refresh = document.getElementById("reset");

    addBox.addEventListener('click', function(){
        FOTSN.createBody(1);
    });
    add20Box.addEventListener('click', function(){
        FOTSN.createBody(20);
        // console.log("hey 20addbox");
    });
    refresh.addEventListener('click', function(){
        const allplanets = document.querySelectorAll(".body");
        allplanets.forEach(function(planet){
            // planet.style["background-color"] = "red";
            planet.remove();
        });
    });

    FOTSN.createBody(0);

}

FOTSN.init();