const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const CardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shopingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const isAsideClosed = shopingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shopingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    shopingCartContainer.classList.toggle('inactive');


    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }


}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shopingCartContainer.classList.add('inactive'); // cierro el carrito porque abri el detalle de productos aside

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

//------------Creamos la info que va a usar la funcion renderProducts para llenar la tienda de productos , eventualmente a futuro esta info se sacaria de una lista de datos-------------------

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: "https://img.freepik.com/vector-gratis/diseno-ordenador_1156-101.jpg?w=740&t=st=1682474309~exp=1682474909~hmac=b2c28682bb68ede820b882d8572c749baaa12f267e4a24577c8a6b5ad0455665",
});
productList.push({
    name: 'cpu',
    price: 600,
    image: "https://http2.mlstatic.com/D_NQ_NP_995978-MLA43242206151_082020-O.webp",
});


function renderProducts(arr){
    for(product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        //product = {name,price,image} -> product.image
        productImg.addEventListener('click',openProductDetailAside); // agrego la escucha del evento para ver cuando clickean la foto
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
         
        const productName = document.createElement('p'); 
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        CardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);

