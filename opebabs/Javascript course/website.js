// declaring variables
let cartQuantity = 0;
    
// Getting the button Ids from HTML
const showBtn1 = document.getElementById('btn1');
const showBtn2 = document.getElementById('btn2');
const showBtn3 = document.getElementById('btn3');
const showBtn4 = document.getElementById('btn4');
const showBtn5 = document.getElementById('btn5');

// Adding and Onclick function to the button 
 showBtn1.addEventListener('click', function(){
  // Update the paragraph with id="total"
    document.getElementById("total").innerText = `Cart Quantity: ${cartQuantity}`;
})
 
showBtn2.addEventListener('click', function(){
    cartQuantity += 1; // shortcut for reassigning
    document.getElementById("total").innerText = `Cart Quantity: ${cartQuantity}`;
})

showBtn3.addEventListener('click', function(){
   cartQuantity = cartQuantity + 2;
   document.getElementById("total").innerText = `Cart Quantity: ${cartQuantity}`;
})

showBtn4.addEventListener('click', function(){
    cartQuantity = cartQuantity + 3;
    document.getElementById("total").innerText = `Cart Quantity: ${cartQuantity}`;
})

showBtn5.addEventListener('click', function(){
    cartQuantity = 0;
    document.getElementById("total").innerText = `Cart Quantity: ${cartQuantity}`;
})

let miniCalculator = '';
function updateDisplay(value){
    miniCalculator += value;
}

const showBtn6 = document.getElementById('btn6');
const showBtn7 = document.getElementById('btn7');
const showBtn8 = document.getElementById('btn8');
const showBtn9 = document.getElementById('btn9');
const showBtn10 = document.getElementById('btn10');

showBtn6.addEventListener("click", function() {
    updateDisplay("1")
});


