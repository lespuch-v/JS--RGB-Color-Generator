// Number of squares
let SQUARE_NUMBER = 500

// Initial variables
const mainContainer = document.querySelector(".main-container")
const clrArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let allSquares = document.getElementsByTagName("a")

// Creating color square
let square = document.createElement("a")

// Generating squares with color
function generateSquares(number){
    for(let i = 0; i < number; i++){
        mainContainer.innerHTML += square
        square.classList.add("btn-color-container")
        square.style.backgroundColor = `${genereteColor()}`
        mainContainer.appendChild(square)
    }
}

// Saving color
document.body.addEventListener( 'click', function ( event ) {
    let rgbValue
    if( event.target.classList == 'btn-color-container' ) {
      console.log("hellow")
      rgbValue = event.target.style.backgroundColor
      navigator.clipboard.writeText(rgbValue);
      alert("Color Saved: (" + rgbValue + ").");
    }
  } )


// HEX Color: #ffe6e6 # + 6  
// Color generator
function genereteColor(){
    let gColor = "#"
    let randomValue 
    for(let i = 0; i < 6; i++){
        randomValue = clrArray[Math.floor(Math.random() * clrArray.length)]
        gColor += randomValue
    }
    return gColor
}
        

// Function execution
generateSquares(SQUARE_NUMBER)