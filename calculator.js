// Giving the value to our text/Number are a from our buttons
function enterVal(value) {
    document.getElementById('text').value += value + "";
}

// Using eval() --> function to calculate the maths 
function solution() {
    let p = document.getElementById('text').value;
    let q = eval(p);
    document.getElementById('text').value = q;
}

// Function to clear everything from the text/ number area
function clearVal() {
    document.getElementById('text').value = "";
}


// Function to remove number one by one from our text/number area
function revVal() {
    var backspace = document.getElementById('text').value;
    document.getElementById('text').value = backspace.substring(0, backspace.length - 1);
}

function dMode() {
    document.body.classList.toggle("dark-mode-on");
}
