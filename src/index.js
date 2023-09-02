import _ from 'lodash';
import './style.css'
import Icon from './assets/img/facebook.png'
function component() {
    const element = document.createElement('div');

    // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');


    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon)


    return element;
}

document.body.appendChild(component());