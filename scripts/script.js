'use strict'
// Create a button element
const button = document.createElement('button')
button.textContent = 'Go to YouTube'
button.style.padding = '10px 20px'
button.style.fontSize = '16px'
button.style.cursor = 'pointer'

// Add click event listener

// Append the button to the body
button.addEventListener('click', () => {
	window.open(
		'https://www.youtube.com/watch?v=WxDRk1miItE&ab_channel=MovieThread',
		'_blank'
	)
})

document.body.appendChild(button)

function anotherFunction() {
	console.log('This is another function.')
}
function fnWithCallback(callbackFunction) {
	console.log('Function with callback executed.')
	callbackFunction()
}
fnWithCallback(anotherFunction)
let myName = 'Jack'
if (myName === 'Jack') {
	console.log('Hello Jack!')
}
console.log(90 + 102 + 130 + 70)
// Hello man you try pull origin main this >?

// function square(arg) {
// 	return arg * arg
// }
// function add(argOne, argTwo) {
// 	return argOne + argTwo
// }
// function squareAdd(arg) {
// 	let result = square(arg)
// 	return result + add(arg)
// }
// console.log('8 x 8: ' + square(8))
// console.log('8 + 20: ' + add(8, 20))
// console.log('8 + 10: ' + add(8))
// console.log('(8 x 8) + (8 + 10): ' + squareAdd(8))

// let anonymus = (sum = 10) => {
// 	console.log('Sum: ' + sum * 2)
// }
// anonymus(40)

console.log('Hoisted: ' + add(200, 200))
function add(numOne, numTwo) {
	return numOne + numTwo
}
let addition = add
console.log('Assigned: ' + addition(32, 64))
let anon = function (numOne, numTwo) {
	let result = numOne + numTwo
	return result
}
console.log('Anonymous: ' + anon(9, 1))
let iffy = (function () {
	let str = 'Self Invoked Output'
	return str
})()
console.log(iffy)

console.log('My Man:' + myMan('Jack'))
function myMan(name) {
	return ' My name is ' + name
}
let man = myMan
console.log('Man:' + man('Ms. Jack'))
let mens = function (name1, name2) {
	let result = name1 + ' and ' + name2
	return result
}
console.log('Mens: ' + mens('Jack', 'Jill'))
let hide = (function() {
	let str = 'Hidden'
	return str
})()
console.log(hide)
// pull content

