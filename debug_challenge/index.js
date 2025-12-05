// make sure these match the HTML element names for the ID then class.
const input = document.querySelector("#name");
const display = document.querySelector("#output");

// This code should be working
input.addEventListener("input", function () {
const name = input.value;
display.textContent= name;
})




// missing function?

// you should see 5 in the output of your console
function simpleMath(a, b){
    return a + b
}
console.log(simpleMath(2, 3));