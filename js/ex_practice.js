'use strict';

// 1. element를 조작할 때는 DOM이 로드가 되어 있어야 한다.
// 2. class는 snake, id는 camelCase
// 3. classList. 여러가지 메소드 있음 (class 조작)
// 3. getElementById는 1개 반환, getElementsByClassName은 여러개 반환
// 4. .querySelector('#menu_button > label')

document.addEventListener("DOMContentLoaded", function(){

    const menuFrame = document.getElementsByClassName("menu_frame")[0] // class => []
    console.log("menuFrame", menuFrame) // undefined
        
    menuFrame.addEventListener("click", () => {
        menuFrame.classList.toggle("open")
        console.log(menuFrame.classList)
    })
   });
