// ternary operator

const x = 10

// ? means "then"   : means "else"
const color = x > 10 ? "red" : "blue"
//const color = "green"

switch (color) {
  case "red":
    console.log("color is red")
    break
  case "blue":
    console.log("color is blue")
    break
  default:
    console.log("color is NOT red or blue")
    break
}



let hue = null

if (x > 10) {
    hue = "red"
} else {
    hue = "blue"
}
