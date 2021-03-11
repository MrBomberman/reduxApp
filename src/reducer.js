const reducer = (state= 6, action) => { // принимает стейт и действие
    // action - обычный объект джс, поля могут быть самый разные, но тайп должен быть всегда в значении строки
    // то действие, которое мы попытаемся совершить
  
    switch (action.type) { // если действие совпадает, делаем изменения
      case 'INC': // если попадает под правило, произврдим действие
        return state + 1
  
      case 'DEC':
        return state - 1
  
      case 'RND':
        return state + action.value;
      
      default: 
        return state;
    }
  
  
  }

export default reducer;