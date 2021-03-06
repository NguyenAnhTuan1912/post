import { renderPost } from "./modifierPost.js";


const postCreateBtn = document.querySelector('#js-postCreateButton');
const postCancelBtn = document.querySelector('#js-postCancelButton');
const postBtn = document.querySelector('#js-postButton');

const dataInputTextArea = document.querySelector('#js-textAreaDataInput');

const modal = document.querySelector('#js-modal');

const postsContainer = document.querySelector('#js-postsContainer');

const spanTimeInfor = {
    length: 0,
    element: []
}

const timeStart = (function() {
    let counter = 0;
    return function () {
        counter += 5;
        return counter;
    }
})();

function toggleElementClassList(element, className) {
    element.classList.toggle(className);
}

function addElementClassList(element, className) {
    if(!element.classList.contains(className)) {
        element.classList.add(className);
    }
}

function removeElementClassList(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

function addStyles(element, styles) {
    for(let key in styles) {
        element.style[key] = styles[key];
    }
}

function addElementHover(element, newStyles, OldStyles) {
    element.addEventListener('mouseover', (e) => {
        addStyles(e.target, newStyles);
    });
    element.addEventListener('mouseout', (e) => {
        addStyles(e.target, OldStyles);
    });
}

function removeElementHover(element, newStyles, OldStyles) {
    element.removeEventListener('mouseover', (e) => {
        addStyles(e.target, newStyles);
    });
    element.removeEventListener('mouseout', (e) => {
        addStyles(e.target, OldStyles);
    });
}

function setDataToRender() {
    renderPost(postsContainer, dataInputTextArea.value);
    dataInputTextArea.value = '';
    toggleElementClassList(modal, 'display--off');

    spanTimeInfor.element = [...document.querySelectorAll('.create-at__time')];
    spanTimeInfor.length = spanTimeInfor.element.length;

    spanTimeInfor.element[spanTimeInfor.length - 1].setAttribute('data-second', timeStart());
}

function postButtonStateChange(bool) {
    if(bool) {
        postBtn.addEventListener('click', setDataToRender);
        addElementClassList(postBtn, 'post-button--available');
    } else {
        postBtn.removeEventListener('click', setDataToRender);
        removeElementClassList(postBtn, 'post-button--available');
    }
}








dataInputTextArea.addEventListener('input', (e) => {
    postButtonStateChange((e.target.value !== ''));
});





postCreateBtn.addEventListener('click', (e) => {
    toggleElementClassList(modal, 'display--off');
});

postCancelBtn.addEventListener('click', (e) => {
    toggleElementClassList(modal, 'display--off');
    
    
    if(dataInputTextArea.value !== '') {
        postCreateBtn.innerHTML = dataInputTextArea.value;
    } else {
        postCreateBtn.innerHTML = 'Tuan ??i, b???n ??ang ngh?? g?? th????';
    }
});

function calcTime(timeDistance) {
    if(timeDistance < 60) {
        return `${timeDistance} gi??y tr?????c.`;
    } if(timeDistance >= 60 && timeDistance < 3600) {
        return `${timeDistance % 60 + 1} ph??t tr?????c.`;
    }
}

setInterval(() => {
    const timePass = timeStart();
    if(spanTimeInfor.length > 0) {
        for(let i = 0; i < spanTimeInfor.length; i++) {
            const postTimeCreated = parseInt(spanTimeInfor.element[i].getAttribute('data-second'));
            if((timePass - postTimeCreated) >= 60 && (timePass - postTimeCreated) % 60 === 0 && (timePass - postTimeCreated) < 3600) {
                spanTimeInfor.element[i].innerHTML = `${(timePass - postTimeCreated) / 60} ph??t tr?????c.`;
            } else if(timePass - postTimeCreated < 60)
                spanTimeInfor.element[i].innerHTML = `${(timePass - postTimeCreated)} gi??y tr?????c.`;
        }
    }
}, 10000);