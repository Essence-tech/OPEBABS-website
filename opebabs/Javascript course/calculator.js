// declare variables
let calculation = '';

// get all the buttons from HTML 
const gray1 = document.getElementById('gray1');
const gray2 = document.getElementById('gray2');
const gray3 = document.getElementById('gray3');
const yellow1 = document.getElementById('yellow1');

const gray4 = document.getElementById('gray4');
const gray5 = document.getElementById('gray5');
const gray6 = document.getElementById('gray6');
const yellow2 = document.getElementById('yellow2');

const gray7  = document.getElementById('gray7');
const gray8 = document.getElementById('gray8');
const gray9 = document.getElementById('gray9');
const yellow3 = document.getElementById('yellow3');

const gray0  = document.getElementById('gray0');
const gray01 = document.getElementById('gray01');
const gray02 = document.getElementById('gray02');
const yellow4 = document.getElementById('yellow4');

const clear  = document.getElementById('clear');


//  Onclick function for all the numbers 
gray1.addEventListener('click', function(){
    calculation += '1'
    console.log(calculation);
});
gray2.addEventListener('click', function(){
    calculation += '2'
    console.log(calculation);
});
gray3.addEventListener('click', function(){
    calculation += '3'
    console.log(calculation);
});
gray4.addEventListener('click', function(){
    calculation += '4'
    console.log(calculation);
});
gray5.addEventListener('click', function(){
    calculation += '5'
    console.log(calculation);
});
gray6.addEventListener('click', function(){
    calculation += '6'
    console.log(calculation);
});
gray7.addEventListener('click', function(){
    calculation += '7'
    console.log(calculation);
});
gray8.addEventListener('click', function(){
    calculation += '8'
    console.log(calculation);
});
gray9.addEventListener('click', function(){
    calculation += '9'
    console.log(calculation);
});
gray0.addEventListener('click', function(){
    calculation += '0'
    console.log(calculation);
});

// Onclick function for the symbols
gray01.addEventListener('click', function(){
    calculation += ' . '
    console.log(calculation);
});
yellow1.addEventListener('click', function(){
    calculation += ' + '
    console.log(calculation);
});
yellow2.addEventListener('click', function(){
    calculation += ' - '
    console.log(calculation);
});
yellow3.addEventListener('click', function(){
    calculation += ' * '
    console.log(calculation);
});
yellow4.addEventListener('click', function(){
    calculation += ' / '
    console.log(calculation);
});

// Function for the evaluation
gray02.addEventListener('click', function(){
    calculation = eval(calculation)
    console.log(calculation);
});


// Onclick function for the clear button
clear.addEventListener('click', function(){
    calculation += ''
    console.log(calculation);
});