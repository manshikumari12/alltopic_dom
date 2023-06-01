let display=document.getElementById("display")
let numpad =document.querySelectorAll(".numpad>button")
let opr=document.querySelectorAll(".oprators>button")

let eual =document.getElementById("equal")

let isfirstnum=true


let firstnum =""
let secondnum =""
let oprator=null


for(let i=0; i<numpad.length; i++){
    numpad[i].addEventListener("click",function(event){
        if(isfirstnum===true){
            console.log(isfirstnum)
            firstnum+=event.target.innerText
            
        }else{
            secondnum+=event.target.innerText
        }
        display.innerText=display.innerText+event.target.innerText

    })
}

for(let i=0; i<opr.length; i++){
opr[i].addEventListener("click", function (event) {
    isfirstnum = false;
    oprator = event.target.innerText;
    console.log(oprator)
    display.innerText = display.innerText + event.target.innerText;
} )
}


eual.addEventListener("click", function () {
  display.innerText = calculate(firstnum , secondnum , oprator);
  console.log(display)
});

function calculate(firstnum,secondnum,oprator){
    switch (oprator) {
        case "+":
            
            return Number(firstnum)+Number(secondnum);
            case "-":
            
            return Number(firstnum)-Number(secondnum);
            case "*":
            
            return Number(firstnum)*Number(secondnum);

            case "/":
            
            return Number(firstnum)/Number(secondnum);
    
      
    }
}