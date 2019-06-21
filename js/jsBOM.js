// Xac dinh kich thuoc cua trinh duyet
let wBrowser = window.innerWidth;
let hBrowser = window.innerHeight;
console.log(wBrowser, hBrowser);

document.getElementById('btnClick').addEventListener('click',function(){
	// Mo ra 1 cua so moi
	// window.open('https://www.facebook.com/','Facebook','width=300; height=300');
	 
	// Tai lai (load lai) trang web
	// window.location.reload(true);
	
	// Di sang 1 trang moi
	window.location.href = '../html/jsBOM2.html';
});

// Lay kich thuoc man hinh may tinh
let wScreen = screen.width;
let hScreen = screen.height;
console.log(`width screen: ${wScreen}, height screen: ${hScreen}`);