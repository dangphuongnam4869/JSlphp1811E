$(function(){
	// Ham khoi tao cua JQ
	// Cho doi cac ma html va css thuc thi xong roi moi thuc thi cac ma lenh JS bang JQ
	// Sau nay cac ma lenh JQ dat tat ca trong nay
	
	// Bat su kien = JQ cho cac phan tu HTML
	
	// (1) phai truy cap vao phan tu HTML
	// $ = jQuery
	// let btn = $('#btnClick');
	// console.log(btn);
	// (2) bat su kien
	$('#btnClick').click(function(){
		// alert('Hello world');
		// Lay gia tri thuoc trong phan tu HTML
		let data = $('#title').attr('id');
		console.log(data);
		$('input[class="txtData"]').attr('type', 'button');
		$('img').attr('src','../picture/sohatv-favicon.png');
		// Xoa di ca thuoc tinh class
		// $('div.content').removeAttr('class');
		// Xoa di gia tri cua 1 thuoc tinh
		$('div.content').removeClass('content');
	});
	$('#btnClick3').on('click',function(){
		if($('div.content').hasClass('content')){
			console.log('OK');
		} else{
			$('div').addClass('content');
			console.log('Done');
		}
	});
	$('.txtArea').keyup(function() {
		/* Act on the event */
		let val = $(this).val();
		$('.content-box').html(val);
	});
	$('#btnClick4').click(function(){
		// $('div.content').toggleClass('show-hide');
		// $('div.content').css('background-color', 'darkgrey');
		// $('div.content').css('border','1px solid aquamarine');
		$('div.content').css({
			backgroundColor: 'grey',
			border: '1px solid yellow',
			padding: '10px'
		})
		let w = $('div.content').width();
		let h = $('div.content').height();
		console.log(w,h);
		// Xet lai kich thuoc
		$('div.content').width(500);
		$('div.content').height(500);
		let w2 = $('div.content').width();
		let h2 = $('div.content').height();
		console.log(w2,h2);
		// Lay kich thuoc ban dau + padding khong lay border
		let w3 = $('div.content').innerWidth();
		let h3 = $('div.content').innerHeight();
		console.log(w3,h3);
		$('ul li a').eq(2).css('color','red');
		if($('#checkbox').is(':checked')){
			console.log('YES');
		} else{
			console.log('NO');
		}
		$('section.box').find('h3').css('color','green');
		$('section.box').find('article').next().next().find('h2').css('color','red');
		$('section.box').find('div.box-1').prev().find('h5').css('color','red');
		$('header.header').parent().css({
			width: '300px',
			height: '300px',
			backgroundColor: 'violet'
		});

		let textH1 = $('#title').html('Hello world');
		let textH = $('#title').text('Hello world JQ');
		console.log(textH1, textH);
		// $('#title').empty();  // Xoa noi dung nam trong the
		$('#title').remove(); // Xoa ca the di luon

	});
	$('#btnClick5').click(function(){
		// $('div.content').fadeOut();
		$('div.content').hide();
	})
	$('#btnClick6').click(function(){
		// $('div.content').fadeIn();
		// $('div.content').show();
		$('div.content').slideDown('slow');
	})

});