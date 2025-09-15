// #HmvAfRQM
// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

    fetch(`https://dummyjson.com/carts`)
    .then(res => res.json())
    .then(object => {
        console.log(object)
        let carts = object.carts;
        console.log(carts)
            let cartsDiv = document.createElement('div')
            document.body.appendChild(cartsDiv);

            for (const cart of carts) {
                let cartDiv = document.createElement('div')
                let infoDiv = document.createElement('div')
                infoDiv.innerText = `
                   "discountedTotal": ${cart.discountedTotal},
                   "id": ${cart.id},
                   "total": ${cart.total},
                   "totalProducts": ${cart.totalProducts},
                   "totalQuantity": ${cart.totalQuantity},
                   "usedId": ${cart.userId},
                   "products":`

                let products = cart.products
                let productsList = document.createElement('ol')
                for (const product of products) {

                    let productItem = document.createElement('li')
                    productItem.innerText = `
                    "id": ${product.id},
                    "title": ${product.title},
                    "price": ${product.price},
                    "quantity":${product.quantity},
                    "total": ${product.total},
                    "discountPercentage": ${product.discountPercentage},
                    "discountedTotal": ${product.discountedTotal}
                    `

                    let img = document.createElement('img')
                    img.src = product.thumbnail;

                    productItem.appendChild(img)
                    productsList.appendChild(productItem)
                }

                cartDiv.append(infoDiv, productsList)
                cartsDiv.appendChild(cartDiv)

            }
})
