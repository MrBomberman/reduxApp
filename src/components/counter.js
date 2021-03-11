import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions' 
// import { bindActionCreators} from 'redux';

// компонет принимает несколько пропсов из стейта и actions, этот компонент мы связываем с двумя сущностями
// благодаря команде connect мы связываем две наши сущности стора



const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className='jumbotron'>
        <h1>{counter}</h1>
            <button onClick={dec} class="btn btn-primary">DEC</button>
            <button onClick={inc} class="btn btn-success">INC</button>
            <button onClick={rnd} class="btn btn-danger">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => { // перевести стейт в пропсы
    // возвращаем объект с теми свойствами, которые мы хотим вытащить из стейт
    return { // выходит объект с тем стейтом, который нам нужен
        counter: state // полчаем каунтер из стейта
    }
}
// вторая функция отдает нам действия, которые мы вытаскиваем из файла actions
// const mapDispatchToProps = (dispatch) => { // передаем в виде кофигурации объект, у котрого свойства функции, которые будут использоваться в пропсах
//     return bindActionCreators(actions, dispatch); // тоже самое, что и запись ниже
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch); // привязывание к той функции, которая нам необходима
//     // return {
//     //     inc,
//     //     dec,  //() => dispatch(dec())
//     //     rnd
//     // }
// }

export default connect(mapStateToProps, actions)(Counter); 
// выполнит весь функионал mapDispatchToProps
// эта функция создана так, что при передаче вторым аргументом объекта, она выполнит все действия за нас
// таким образом мы можем использовать глобальный стор в любой части нашего приложения
// connect принимает параметры конфигурации, и принимает компонент
// в итоге она возвращает обернутый в функцию компонент