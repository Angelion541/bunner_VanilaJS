'use strict';

const API_PRODUCTS = 'https://solovey.com.ua/test/data.json';

fetch(API_PRODUCTS, { method: 'GET' })
  .then(response => response.json())
  .then(data => {
    const bunnerCurrency = data.currency;
    const sneakers = data.sneakers;
    let index = 0;
    const bunner = document.querySelector('.bunner');

    const title = document.createElement("p");
    const container = document.createElement("div");
    const price = document.createElement("p");
    const productImg = document.createElement("img");
    const buylink = document.createElement("a");
    const buyButton = document.createElement("button");

    title.classList.add("bunner__title", "title");
    title.innerHTML = sneakers[index].model;

    container.classList.add("container")

    price.classList.add("bunner__price", "price");
    price.innerHTML = `${bunnerCurrency}${sneakers[index].price}`;

    productImg.classList.add("bunner__img", "img");
    productImg.src = sneakers[index].image_url;

    buylink.classList.add("bunner__link")
    buylink.href = sneakers[index].link;

    buyButton.classList.add("bunner_buy",  "buy");
    buyButton.type = 'button'
    buyButton.src = sneakers[index].link;
    buyButton.innerText = 'ORDER NOW!'

    buylink.append(buyButton);
    container.append(price, productImg, buylink);
    bunner.append(title, container);

    setInterval(() => {
      if (index === sneakers.length - 1) {
        index = 0;
      }

      index++;
      title.innerHTML = sneakers[index].model;
      price.innerHTML = `${bunnerCurrency}${sneakers[index].price}`;
      productImg.src = sneakers[index].image_url;
      buylink.href = sneakers[index].link;

      container.append(price, productImg, buylink);
      bunner.append(title, container);
    }, 5000);
  });