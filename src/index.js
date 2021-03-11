import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // это обертка, которая нужна для того, чтобы передать опред параметры по всему приложению ниже
import {createStore} from 'redux';
import reducer from './reducer';
import App from './components/app';

// функция reducer всегда должна быть чистой функцией, всегда должна зависеть от стейта и акшен
const store = createStore(reducer); // принимает в себя reducer 
// connect связывает компоненты со стором
// стор - большое глобальное хранилище, куда входит reducer и state
// чтобы использовать стор во всем приложении мы использовали компонент - провайдер, благодаря ему мы можем использовать стор в абсолютно любом компоненте ниже оп иерархии
// мы использовали его в Counter

// const {dispatch} = store; // вытаскиваем из стора нужную функцию связку

// - это обертнутые в dispatch функции
// говорим, что будем передавать ниже, теперь все, что находится в App будет иметь доступ к стору
ReactDOM.render(
        <Provider store={store}>
               <App/> 
        </Provider>
        , document.getElementById('root'))

// update(); // чтобы первый раз что-то появилось на странице

// store.subscribe(update)// функция подписки к store, каждый раз при изменении стора будет вызываться

// subscribe уже включен в провайдер
  
// store.dispatch({type: 'INC'}); // связующее звено между action and store - чтобы совершить действие
// console.log(store.getState()) // получим текущий стейт
// схема работы bindActionCreators
// const bindActionCreator = (creator, dispatch) => (...args) => { // функция генерит другую функцию, в которую мы передаем все аргументы возможного creator
//   // поэтому аргументы мы не указываем, так как они передадутся все
//   dispatch(creator(...args));

// }
// actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd 
// }
// возвращает объект, у которого ключи будут точно такие же, какие мы передали в нашу функцию
  // получаем уже обернутые функции, которые используют dispatch
  // () => dispatch(inc())





