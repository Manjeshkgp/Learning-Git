async function fetchProducts(){
    const response = await fetch("https://www.fakestoreapi.com/products");
    const products = await response.json();
    return products
}

fetchProducts().then((products)=>{
    console.log(products);
})

// Its not a multiplication file it is used for learning git and revise some concepts of async-await