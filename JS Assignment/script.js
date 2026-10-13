
const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    console.log("Button clicked!");
//Button Clicked Once
if (message .innerText === ""){
    message.innerText = "Button was clicked!";
} else {
//Button Clicked Twice
    message.innerText = "Ok stop clicking me.";
}

});
