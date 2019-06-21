let alert1 = document.getElementById('solve');
alert1.addEventListener('click',function(){
	let a = document.getElementById('a').value;
	let b = document.getElementById('b').value;
	let c = document.getElementById('c').value;
	document.getElementById('bug').innerHTML = 'Vui lòng nhập hệ số phương trình và dữ liệu là số';
	document.getElementById('bug').className= 'bugTitle';	
	let checkA;
	let checkB;
	let checkC;
	if(a == '' || isNaN(a))
	{
		checkA=false;
		document.getElementById('a').style.border= '2px solid red'
	} else{
		checkA=true;
		document.getElementById('a').style.border = '1px solid #ccc'
	}
	if(b == '' || isNaN(b))
	{
		checkA=false;
		document.getElementById('b').style.border= '2px solid red'
	} else{
		checkA=true;
		document.getElementById('b').style.border = '1px solid #ccc'
	}
	if(c == '' || isNaN(c))
	{
		checkA=false;
		document.getElementById('c').style.border= '2px solid red'
	} else{
		checkA=true;
		document.getElementById('c').style.border = '1px solid #ccc'
	}
	if(a!='' && b!='' && c!='')
	{
		document.getElementById('bug').innerHTML ='';
		let delta = (b*b) - (4*a*c);
		if(delta < 0)
		{
			document.getElementById('notice').innerHTML = 'Kết quả: ';
			document.getElementById('result').innerHTML = 'Nghiệm: Phương trình vô nghiệm';
		}
		if(delta == 0)
		{
			let x = (-b)/(2*a);
			document.getElementById('notice').innerHTML = 'Kết quả: Phương trình có nghiệm duy nhất';
			document.getElementById('result').innerHTML = 'Nghiệm: X1 = X2 = '+x;
		}
		if(delta > 0)
		{
			let x1 = (- b + Math.sqrt(delta)) / (2*a);
			let x2 = (- b - Math.sqrt(delta)) / (2*a);
			document.getElementById('notice').innerHTML = 'Kết quả: Phương trình có 2 nghiệm phân biệt';
			document.getElementById('result').innerHTML = 'Nghiệm: X1= '+x1+' Và X2= '+x2;
		}
	}
	else {
		document.getElementById('notice').innerHTML = '';
		document.getElementById('result').innerHTML = '';
	}
});
let reset = document.getElementById('reset');
reset.addEventListener('click',function(){
	window.location.reload();
});