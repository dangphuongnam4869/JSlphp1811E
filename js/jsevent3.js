let btnClick = document.getElementsByClassName('btnClick');
btnClick[0].addEventListener('click', function(){
	let myTitle = document.getElementById('title');
	// myTitle.innerHTML = 'Hi LPHP1811E';
	// myTitle.innerHTML = '';
	myTitle.innerHTML += ' Hi LPHP1811E';
	// document.getElementById('txtInput').type = 'text';
	document.getElementById('txtInput').setAttribute('type','text');
	document.getElementById('txtInput').className = 'myInput2 myInput3';
	let divContent = document.getElementsByClassName('content');
	divContent[0].style.width = '300px';
	divContent[0].style.height = '300px';
	divContent[0].style.border = '1px solid red';
	divContent[0].style.backgroundColor = 'pink';
});
// btnClick[0].onclick = function(){
// 	let myTitle = document.getElementById('title');
// 	myTitle.innerHTML = 'Hi LPHP1811E'
// }