import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();

    // this.elem.addEventListener('product-add', e => {
    //   console.log('выбран:', e.detail);
    // });

  }

  render() {
    this.elem = document.createElement('DIV');
    this.elem.className = 'card';
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
    this.elem.append(cardTop, cardBody);
    this.elem.addEventListener('click', this.onClick.bind(this));
    return this.elem;
  }

  onClick(e) {    
    if (e.target.closest('.card__button')){

      let event = new CustomEvent('product-add', {
        detail: this.product.id,
        bubbles: true,      
      });
  
      this.elem.dispatchEvent(event);

    } 
  }

}