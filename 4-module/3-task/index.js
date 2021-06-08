function highlight(table) {
  // ваш код...
  for (let i = 1; i < table.rows.length; i++) {

    if (table.rows[i].cells[3].dataset.available) {
      table.rows[i].cells[3].dataset.available == 'true' ? table.rows[i].className = 'available' : table.rows[i].className = 'unavailable';
    } else {
      table.rows[i].setAttribute('hidden','');
    }
    
    table.rows[i].cells[2].innerHTML == 'm' ? table.rows[i].classList.add('male') : table.rows[i].classList.add('female');
    
    if (table.rows[i].cells[1].innerHTML < 18) {
      table.rows[i].style = 'text-decoration: line-through';
    };    
       
  }
}
