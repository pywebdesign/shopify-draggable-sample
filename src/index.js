console.log("hello-world")

import {Draggable} from '@shopify/draggable';

window.onload = function(){
    console.log(document.querySelectorAll('ul')[0].children)
    new Draggable(document.querySelectorAll('ul'))
    .on('drag:start', () => console.log('drag:start'))
    .on('drag:move',  () => console.log('drag:move'))
    .on('drag:stop',  () => console.log('drag:stop'));
    console.log("kjasdhlfsjdh")
}
