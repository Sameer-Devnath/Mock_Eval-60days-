let navbar = document.getElementById("navbar");

let products = document.createElement("h1");
products.innerHTML = "Products Listing Page";
products.className = "h1";

let select1 = document.getElementById("select1");
select1.addEventListener("change", function(){
    console.log(select1.value);
})

let inp = document.getElementById("input");
let select2 = document.getElementById("select2");

navbar.append(products,select1,input,select2);

let container = document.getElementById("container");

async function fetchData(){
    try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();

        console.log(data);
        showData(data);
        
    } catch (error) {
        console.log(error);
    }
    
}
fetchData();

function showData(data){
    data.forEach(element => {
        let div = document.createElement("div");
        div.className = "div";

        let img = document.createElement("img");
        img.src = element.image;         //"https://th.bing.com/th/id/OIP.TA8KiMx_I6aeEk87I9y81AAAAA?rs=1&pid=ImgDetMain";
        img.className = "img";

        let title = document.createElement("h1");
        title.innerHTML = element.title;

        let price = document.createElement("h3");
        price.innerHTML = "Price: " + "$" + element.price;

        div.append(img , title , price);
        container.appendChild(div);

    });
}