import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;    
    this.elem = this.render();
    this.event();
  }

  render() {
    let card = document.createElement('DIV');
    card.className = 'card';
    let cardTop = document.createElement('DIV');
    cardTop.className = 'card__top';
    let cardImage = document.createElement('IMG');
    cardImage.className = 'card__image';
    cardImage.src = `/assets/images/products/${this.product.image}`;
    let cardPrice = document.createElement('SPAN');
    cardPrice.className = 'card__price';
    cardPrice.innerText = `€${this.product.price.toFixed(2)}`;
    cardTop.append(cardImage,cardPrice);
    let cardBody = document.createElement('DIV');
    cardBody.className = 'card__body';
    let cardTitle = document.createElement('DIV');
    cardTitle.className = 'card__title';
    cardTitle.innerText = this.product.name;
    let cardButton = document.createElement('BUTTON');
    cardButton.className = 'card__button';
    cardButton.type = 'button';
    let cardButtonImg = document.createElement('IMG');
    cardButtonImg.alt = 'icon';
    cardButtonImg.src = '/assets/images/icons/plus-icon.svg';
    cardButton.append(cardButtonImg);
    cardBody.append(cardTitle,cardButton);
    card.append(cardTop, cardBody);
    return card;
  }

  event() {
    let event = new Event('product-add', {bubbles: true});
    this.elem.dispatchEvent(event);
    //console.log(this.product.id);

    document.addEventListener('click', function(event) {
      if (event.target.closest('.card__button')) {
        console.log('кнопка');
        console.log(event);
        console.log(this.product.id);
      } else {
        return;
      }      
    });

  }

}
