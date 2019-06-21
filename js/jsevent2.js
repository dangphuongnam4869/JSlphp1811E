// truy cap phan tu html thong qua id cua no
let myBtn = document.getElementById('btnClick');
console.log(myBtn);
// truy cap phan tu html thong qua class
let myBtn2 = document.getElementsByClassName('btn');
console.log(myBtn2[0]);
// truy cap phan tu html thong qua tag name
let myBtn3 = document.getElementsByTagName('button');
console.log(myBtn3[0]);
// truy cap phan tu html thong qua selector css cua no
let myText = document.querySelectorAll('.text');
console.log(myText[1]);

//---------------------------------------------------
// bat su kien js thong qua dom event
// dau tien thong qua dom element (Phai truy cap vao phan tu day)
// let btn3 = document.getElementById('btnClick3');

// bat su kien cho no
// co 2 cach
// btn3.onclick = function() {
// 	console.log('ban vua click vao toi');
// }
let btn4 = document.getElementsByClassName('btnPrimary');
// bat su kien click cho no
// btn4[0].ondblclick = function(){
// 	console.log('ban vua double click');
// }

// cach 2 de bat su kien
btn4[0].addEventListener('dblclick',function(){
	console.log('CCCCCC');
});

let pic1 = document.getElementsByTagName('img')
pic1[0].onmouseover = function(){
	pic1[0].width = 500;
	pic1[0].height = 500;
}
let pic2 = document.getElementsByTagName('img')
pic2[0].onmouseout = function(){
	this.width = 200;
	this.height = 100;
}
//
let keyDown = document.getElementsByClassName('key');
keyDown[0].onkeydown = function(){
	console.log('Key down: '+this.value);
}
let keyPress = document.getElementsByClassName('key');
keyPress[0].onkeypress = function(){
	console.log('Key press: '+this.value);
} 
let keyUp = document.getElementsByClassName('key');
keyUp[0].onkeyup = function(){
	console.log('Key up: '+this.value);
}
let text1 = document.getElementById('text');
text1.onclick = function(){
	this.width = 500;
}