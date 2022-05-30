// Add the coffee to local storage with key "coffee"

let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
console.log(url);
fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    append(res.menu.data);
})
.catch(function(err){
    console.log(err);
})

var arr = JSON.parse(localStorage.getItem("coffee")) || [];
document.querySelector("#coffee_count").append(arr.length);

function append(data){
    // console.log(data);

    data.map(function(ele){
        let box = document.createElement("div");
        let image = document.createElement("img");
        image.src=ele.image;
        let name= document.createElement("p");
        name.innerText= ele.title;
        let price = document.createElement("p");
        price.innerText= ele.price;
        let btn= document.createElement("button");
        btn.innerText="Add to bucket";
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click", function(){
            add(ele)
            count();
        })
        box.append(image,name,price,btn)
        document.querySelector("#menu").append(box)

    });
}

function add(ele){
    // document.querySelector("#coffee_count").innerHTML=null;
    arr.push(ele);
    // console.log(arr.length);
    // console.log(data)
    localStorage.setItem("coffee",JSON.stringify(arr))
    // document.querySelector("coffee_count").append(arr.length)
}

let num = document.getElementById("coffee_count").innerText;
function count(){
    +(num)++;
    document.querySelector("#coffee_count").innerText=`${num}`;
}