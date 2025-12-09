/* JavaScript Code for The Odin Project Etch-A-Sketch Project */
/* Created by Kyle Harder */

const sketchPadContainer = document.querySelector("#sketchpad");
const sketchPadWidth = sketchPadContainer.clientWidth;

function generateGrid(size) {
    // Reset Grid
    sketchPadContainer.innerHTML = "";

    // Create Grid
    for (let i = 0; i < size * size; i++) {
        // Create inner box and set size
        const innerBoxElement = document.createElement("div");
        innerBoxElement.id = "innerBox";
        innerBoxElement.style.width = `${sketchPadWidth / size}px`;
        innerBoxElement.style.height = `${sketchPadWidth / size}px`;

        //Add hover effect for innerBox
        innerBoxElement.addEventListener("mouseover", () => {
            innerBoxElement.style.backgroundColor = "#1f2937";
        });

        // Append innerBox to Container
        sketchPadContainer.appendChild(innerBoxElement);
    }
}

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", () => {
    const size = parseInt(window.prompt("Enter new grid size:"));
    generateGrid(size);
});

generateGrid(16);