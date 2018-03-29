// 1. Дан большой текст, в котором для обозначения диалогов 
// используются одинарные кавычки. Придумать шаблон, который 
// меняет одинарные кавычки на двойные.

// var text = document.getElementById("block").textContent;
// document.getElementById("block").textContent = text.replace(/’/g, '"');





// 2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t 
// не меняли одинарную кавычку на двойную.
var marksSwitch = true;

var text = document.getElementById("block").textContent;
var button = document.getElementById("btn-rplce");
button.addEventListener('click', function() {
    if (marksSwitch === true) {
        document.getElementById("block").textContent = text.replace(/\W[’]/g, '"');
        marksSwitch = false;
    } else {
        document.getElementById("block").textContent = text;
        marksSwitch = true;
    };
})