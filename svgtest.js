document.addEventListener("DOMContentLoaded", function () {
    svgProgram();
});

async function svgProgram() {


    let mySvg = await fetch("husetagernavne.svg");
    let svg = await mySvg.text();

    document.querySelector("#house").innerHTML = svg;

};
