
const watchBtn=document.getElementById('watchMenu')
const currencyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')
const titles=document.querySelectorAll('.products-item-title')

const inpBurger=document.querySelector('#burger')
const inpName=document.querySelector('#name')
const inpPhone=document.querySelector('#fon')
const orderBtn=document.querySelector('#order-btn')

// console.log(prices[0].getAttribute('data-base-price'));

watchBtn.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:'smooth'
    })
}

currencyBtn.onclick=()=>{
    let currentCurrency=currencyBtn.innerText 

    let newCurrency='$'
    let coef=0

    if(currentCurrency==='$') {
        newCurrency='€'
        coef=0.91
        convertCurrency(newCurrency, coef)
        
    } else if(currentCurrency==='€' ) {
        newCurrency='сом'
        coef= 89
    } else {
        newCurrency= '$'
        coef= 1
    }

    for (let i= 0; i<prices.length; i++) {
        let basePrice=prices[i].getAttribute('data-base-price')
        prices[i].innerHTML= basePrice* coef+'  ' + newCurrency
    }


    currencyBtn.innerText=newCurrency

    document.getElementById('products').scrollIntoView({
        behavior:'smooth'
    })


}

function convertCurrency(currency, coeficcient) {
    for(i=0;i<prices.length; i++) {
        let basePrice=prices[i].getAttribute('data-base-price')
        prices[i].innerText=basePrice*coeficcient+ '  '+currency
    }
}

// for(i=0; i<productsBtn.length; i++) {
//     productsBtn[i].onclick=()=>{
//         document.getElementById('order').scrollIntoView({
//             behavior:'smooth'
//         })
//     }
// }

productsBtn.forEach((btn, i)=>{
   btn.onclick=()=>{
    inpBurger.value=`${titles[i].innerText}  ${prices[i].innerHTML}`

    document.getElementById('order').scrollIntoView({
        behavior:'smooth'
    })

   }
})

