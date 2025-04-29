// Create a button element
const button = document.createElement('button');
button.textContent = 'Go to YouTube';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';

// Add click event listener


// Append the button to the body
button.addEventListener('click', () => {
    window.open(
			'https://www.youtube.com/watch?v=WxDRk1miItE&ab_channel=MovieThread',
			'_blank'
		)
});

document.body.appendChild(button);

function anotherFunction() {
    console.log("This is another function.");
}
function fnWithCallback(callbackFunction) {
    console.log("Function with callback executed.");
    callbackFunction()
}
fnWithCallback(anotherFunction);
let myName = 'Jack'
if (myName === 'Jack') {
    console.log('Hello Jack!')
}
