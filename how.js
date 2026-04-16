alert('Wow! black is a beatiful colour!')
const inputtime = document.getElementById('inputtime');
inputtime.addEventListener('change', function(
){
    const inputvalue = inputtime.value;
    console.log(inputvalue);
})
alert('Good Morning!')
alert('Good afternoon!')
alert('Good evening!')
let message = 'Hello, Outside'; //global variable
function greet() {
    let message = 'Hello, Inside'; //local variable
    console.log(message); // Output: Hello, Inside
}
let num1 = prompt('what is your favourite colour?');
let num2 = prompt('Enter current time (0-23):');
let num3 = prompt('Enter a Number :');
let num4 = prompt('Enter First Number :');
let num5 = prompt('Enter Second Number :');
for (let i = 1; i <= 10; i++)  {
    console.log(i);
}
