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
    this.elem = this.render();
  }

  render() {
    let table = document.createElement('TABLE');
    let thead = document.createElement('THEAD');
    let tbody = document.createElement('TBODY');    

    this.data.forEach(user => {
      let userSrting = '';
           
      for (let kay in user) {
        userSrting += `<td>${user[kay]}</td>`;
      }

      let tr = document.createElement('TR');
      tr.insertAdjacentHTML('beforeend', userSrting);
      tr.insertAdjacentHTML('beforeend', '<td><button>X</button></td>');
      tbody.append(tr);
      
    });
    
    thead.insertAdjacentHTML('afterbegin', '<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>');
    table.append(thead, tbody);
    this.button();
    return table; 
  }

  button() {
    document.addEventListener('click', function(e) {
      
      if (e.target.closest('button')) {
        e.target.closest('tr').remove();
      } else {
        return;
      }

    });
  }

}
