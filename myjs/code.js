// JavaScript Document

$(document).ready(function(){
	// cai dat su kien 1
	document.getElementById('btb1').onclick = function(){
		// var html = $('#div1').html();
		// alert(html);
		//$('#div1').append("<b>Noi dung in dam moi</b>");
		// $('#div1').after("<div style='background:green'>ABC</ div> ");
		$('#span1').unwrap();
	}
	
	// cai dat su kien 2
	document.getElementById('btb2').onclick = function(){
		// $('#div1').html("<a href='#'>lien ket</a> noi dung moi !!! <b>In dam</b>");
		//$('#div1').prepend(" <b>Noi dung in dam moi</b><br />");
		$('#div1').replaceWith("<div style='background:green'>123</ div>");
	}
		
	// cai dat su kien 3
	document.getElementById('btb3').onclick = function(){
	//	var text = $('#div1').text();
	//	alert(text);
	$("<b>Noi dung in dam moi</b>").appendTo('#div1');
	}
	
	// cai dat su kien 4
	document.getElementById('btb4').onclick = function(){
		$('#div1').text("<a href='#'>lien ket</a> noi dung moi !!! <b>In dam</b>");
	}
});






/*var str = '{"name":"thu vien lap trinh", "age":2}';
var obj = JSON.parse(str);


obj.name = "ABC";
var str2 = JSON.stringify(obj);
alert(str2);
*/


// ham nay duoc goi khi html tai xong
/*function SetUpEventDiv(){
	var obj = document.getElementById('div1');
	obj.onclick = Div1_clicked;
}

// ham nay duoc goi khi click len div 1
function Div1_clicked(){
	var obj = document.getElementById('div1');
	obj.innerHTML = (new Date()).getSeconds();
}
*/

/*
var biencuatoi = "xin chao", date1 = (new Date()).getDate();
alert(date1);
*/

// dung id de lay doi tuong thao tac
// var objS = document.getElementsByTagName("b");

// lay noi dung cua obj
// var content = objS[0].innerHTML;
// alert(content);

//var obj = document.getElementById('div1');
// obj.setAttribute('class','div2');

/* function BatDau(){
	var a = parseInt(document.getElementById('txtA').value);
	var b = parseInt(document.getElementById('txtB').value);
	var c = parseInt(document.getElementById('txtC').value);
	
	alert(a);
	alert(b);
	alert(c);
}
*/

/*
function HocSinh(name, age, _class){
	this.NAME = name;
	this.AGE = age;
	this.CLASS = _class;
	this.FULL_INFORMATION = function(){
		return this.NAME + ', ' + this.AGE + ', ' + this.CLASS;
	}
}

var huynhvothuynhien = new HocSinh("Huynh Vo Thuy Nhien",17,"12A1");
var nguyenhuynhdieuanh = new HocSinh("Nguyen Huynh Dieu Anh",17,"12A9");

var full_a = huynhvothuynhien.FULL_INFORMATION();
var full_b = nguyenhuynhdieuanh.FULL_INFORMATION();

alert(full_a);
alert(full_b);
*/