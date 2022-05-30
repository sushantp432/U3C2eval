document.getElementById("confirm").addEventListener("click",myFun)

function myFun(e){
    e.preventDefault();

    setTimeout(function(){
        console.log("confirm");
        alert("Your order is accepted")
    },0)
    setTimeout(function(){
        console.log("confirm");
        alert("Your order is being Prepared")
    },3000)
    setTimeout(function(){
        console.log("confirm");
        alert("Your order is being packed")
    },8000)
    setTimeout(function(){
        console.log("confirm");
        alert("Your order is out for delivery")
    },10000)
    setTimeout(function(){
        console.log("confirm");
        alert("Order delivered")
    },12000)
}