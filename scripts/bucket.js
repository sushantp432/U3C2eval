// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee"))
console.log(data);

let total=data.reduce(function(sum,el,index,arr){
    return sum+=Number(el.price)

},0)

console.log(total);

document.querySelector("#total_amount").innerText=total;

data.map(function(el,index){
        let box= document.createElement("div");
        let image = document.createElement("img");
        image.src=el.image
        let name= document.createElement("p");
        name.innerText= el.title;
        let price = document.createElement("p");
        price.innerText= el.price;
        let btn= document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click", function(){
            remove(el.index)
        })

        box.append(image,name,price,btn)
        document.querySelector("#bucket").append(box)
})

function remove(el,index){
    data.splice(index,1)
    console.log(data);
    localStorage.setItem("coffee",JSON.stringify(data))
    window.location.reload()
}