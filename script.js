document.body.innerHTML=`<div class="heading-container">
<h1>COSMETICS</h>
<h6> Add Glow To Your Life</h6>
<img class="icon" src="https://media.istockphoto.com/photos/makeup-artists-dream-picture-id1173485050?k=20&m=1173485050&s=612x612&w=0&h=FoWEzsBobi15-QBIt2qEqCzaGZzF1mE-7MNvdzpj7zQ=" width="1500px" height="500px" alt="Products" />
</div>
<div class="main-container" id="maincontainer"></div>`;





const getData = async()=>{
    try{
        const data=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const Products=await data.json();
        Products.forEach((Products)=>{
            displayData(Products);

        })
    }catch(error){

    }
}


getData();

const displayData=(obj)=>{
    maincontainer.innerHTML+=
    `<div class="container">
    
    <p>id: ${obj.id}</p>
    <h3>Product Name: ${obj.name}</h3>
    <p>brand: ${obj.brand}</p>
    <p>price: ${obj.price}</p>
    <p>price_sign: ${obj.price_sign}</p>
    <p>currency: ${obj.currency}</p>
    <p>description: ${obj.description}</p>
    <p>product link: ${obj.product_link}</p>
    <p>Producttype: ${obj.product_type}</p>
    <p>taglist: ${obj.tag_list}</p>
    <p>category: ${obj.category}</p>
   
`
}