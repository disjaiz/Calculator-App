let all_nums_operators = document.querySelectorAll(".number")

for (let i = 0; i < all_nums_operators.length; i++) {

    all_nums_operators[i].addEventListener('click', 
        ()=> {result_screen.innerText = (string += all_nums_operators[i].innerText).toString();});
}

var del = document.querySelector(".del");
var equal_to =document.querySelector(".equal_to");
var reset = document.querySelector(".reset");
// ==========================================================================================================

var result_screen = document.getElementById('result');
string =''

del.addEventListener('click', () =>{
    string = string.slice(0, string.length-1)
    result_screen.innerText = string;
});

reset.addEventListener('click', () =>{result_screen.innerText = string = '';});

equal_to.addEventListener('click', () =>{
    string = string.replace('X', '*');
    string= eval(string);
    var num = parseFloat(string);

    if (Number.isInteger(num)){
        result_screen.innerText = string;
    }
    else{
        string = string.toFixed(3);
        result_screen.innerText = string;
    }
});
