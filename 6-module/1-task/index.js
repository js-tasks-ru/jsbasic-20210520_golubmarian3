/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = document.createElement('TABLE');    
    this.render();
  }

  render() {   
    let thead = document.createElement('THEAD');
    let tbody = document.createElement('TBODY');    

    this.data.forEach(user => {
      let userSrting = Object.values(user)
        .map(value => `<td>${value}</td>`)
        .join('');    

      // let userSrting = '';
           
      // for (let kay in user) {
      //   userSrting += `<td>${user[kay]}</td>`;
      // }

      let tr = document.createElement('TR');
      tr.insertAdjacentHTML('beforeend', userSrting);
      tr.insertAdjacentHTML('beforeend', '<td><button>X</button></td>');
      tbody.append(tr);
      
    });
    
    thead.insertAdjacentHTML('afterbegin', `
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    `);
    this.elem.append(thead, tbody);
    this.elem.addEventListener('click', this.button.bind(this));
    //this.elem.addEventListener('click', this.button); этот вариант также работает. почем????? на вебинаре говорилось, что контекст потеряется
    return this.elem; 
  }

  button(e) {      
    if (e.target.tagName != 'BUTTON') {
      return;
    } else {
      e.target.closest('tr').remove();
    }
  }

}
