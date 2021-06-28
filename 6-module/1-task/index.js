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
    this.render();
  }

  render() {
    this.elem = document.createElement('TABLE');   
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

// export default class UserTable {
//   constructor(rows) {
//     this.elem = document.createElement('table');

//     this.elem.innerHTML = `
//       <thead>
//           <tr>
//             <td>Имя</td>
//             <td>Возраст</td>
//             <td>Зарплата</td>
//             <td>Город</td>
//             <td></td>
//           </tr>
//       </thead>
//     `;

//     let tbody = this.elem.querySelector('tbody');

//     let tableInner = rows.map(row => {
//       let cellsWithData = Object.values(row) // для каждого значения из объекта row
//         .map(value => `<td>${value}</td>`) // обернуть его в <td>
//         .join(''); // полученный массив <td>...</td> объединить в одну строку

//       return `
//           <tr>
//             ${cellsWithData}
//             <td><button>X</button></td>
//           </tr>
//         `; // возвращаем верстку одной строки
//     }).join('');

//     this.elem.innerHTML += `
//       <tbody>
//         ${tableInner}
//       <tbody>
//     `; // оборачиваем полученные строчки в tbody

//     this.elem.addEventListener('click', (event) => this.onClick(event));
//   }

//   onClick(event) {
//     if (event.target.tagName != 'BUTTON') {
//       return;
//     }

//     let tr = event.target.closest('tr');

//     tr.remove();
//   }

// }
