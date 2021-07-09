import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.config = { steps, value };
    this.render();
    this.getValue();
  }

  render() {
    let value = this.config.value;
    let steps = this.config.steps;
    let percent = 100 * value / (steps - 1);

    this.elem = createElement(`
    <div class="slider">

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: ${percent}%;">
        <span class="slider__value">${value}</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: ${percent}%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps"></div>

    </div>    
    `);

    for (let index = 0; index < steps; index++) {
      let step = createElement(`<span></span>`);
      if (index == value) step.classList.add('slider__step-active');
      this.elem.querySelector('.slider__steps').append(step);      
    }

    // this.elem.addEventListener('ribbon-select', ev => {
    //   console.log(ev.detail);
    // });

  }

  getValue() {
    this.elem.addEventListener('click', ev => {
      
      if (ev) {
        let clickX = ev.clientX - this.elem.getBoundingClientRect().x;
        let part = this.elem.offsetWidth / (this.config.steps - 1);
        let partSum = part;
        let targetStep = 0;

        for (let index = 0; index < this.config.steps - 1; index++) {
      
          if (clickX < partSum) {
            if (clickX < partSum - (part / 2)) {
              targetStep = index;              
              break;
            } else {
              targetStep = index + 1;
              break;
            }
          }

          partSum += part;          
        }

        this.value = targetStep;
        
        this.toggle();
        this.customEvent();
      }
  
      // разделить отрезок this.elem.offsetWidth на кол this.config.steps-1 частей например на 4 это 330/4 82,5
      // первая часть 82,5
      // вторая 1 + 82,5
      // третья 2 + 82,5
      // четвертая 3 + 82,5
      // циклом сделать и на выходе массив
      // пробегаемся по массиву исравниваем clickX < item
      // если меньше то clickX < item - часть/2 
      // если меньше тогда targetStep = i
      // потом берем span по счету равный targetStep

    });
  }

  toggle() {
    let value = this.value;
    this.elem.querySelector('.slider__value').innerHTML = value;
    this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
    this.elem.querySelector('.slider__steps').children[value].classList.add('slider__step-active');
    this.elem.querySelector('.slider__thumb').style.left = `${(100 / (this.config.steps - 1)) * value}%`;
    this.elem.querySelector('.slider__progress').style.width = `${(100 / (this.config.steps - 1)) * value}%`;
  }

  customEvent() {
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    }));
  }  

}
