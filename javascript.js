const buttonContainer = document.querySelector("#buttonContainer")
const divContainer = document.querySelector("#container");
const button = document.createElement("button");
button.innerText = "Enter grid's dimensions"
buttonContainer.classList.add("buttonContainer")
buttonContainer.appendChild(button)
const divs = document.querySelector(".divGrid")

let dimensions = 16;
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let brightness = 100;

function createGrid(){
    const existingDivs = document.querySelectorAll(".divGrid");
    console.log(existingDivs)

    if (existingDivs.length > 0) {
    
    existingDivs.forEach((div) => {
      divContainer.removeChild(div);
      
      
    });
  }
  divContainer.style.setProperty("--columns", dimensions);
  divContainer.style.setProperty("--rows", dimensions); 
    for (let index = 0; index < (dimensions * dimensions); index++) {
    const divs = document.createElement("div");
    divs.classList.add("divGrid")
    
    divContainer.appendChild(divs);
    divs.addEventListener("mouseover", hover)
    function hover() {
        
        
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        
        if (divs.style.cssText && randomColor !== divs.style.backgroundColor) {
            
            
            brightness = Math.max(brightness - 10, 0);
              // Decrease brightness by 10%
            divs.style.cssText = `background: #${randomColor}; filter: brightness(${brightness}%)`;  
            
        } else {
            
            if (randomColor !== "ffffff"){
    
            
            divs.style.cssText = `background: #${randomColor}`
        }
        
        }
        }
    
    }
 
    
}
    


createGrid();

button.addEventListener("click", () => {
    
    dimensions = prompt("Enter your desired number of squares per side for the new grid (MAX 100)");
    if (dimensions <= 100 && !NaN){
    createGrid();
    } else (
        alert("invalid input")
    )
})


