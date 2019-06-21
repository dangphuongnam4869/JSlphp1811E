function myClick(name){
	alert('Hello '+name);
}
function test(){
	console.log('Hello');
}
function myBlur(){
	console.log('This is Blur');
}
function myFocus(){
	console.log('This is Focus');
}
function myDbClick(){
	console.log('This is DbClick');
}
function myChange(obj){
	let gender = obj.value;
	console.log('Bạn chọn: '+gender);
}
function getChangeText(obj){
	let val = obj.value;
	console.log('Bạn nhập: '+val);
}
function myKeyDown(ob){
	console.log('Key Down: '+ob.value);
}
function myKeyPress(ob){
	console.log('Key Press: '+ob.value);
}
function myKeyUp(ob){
	console.log('Key Up: '+ob.value);
}
function myError(){
	console.log('Error');
}
function errorPage(){
	console.log('Error page');
}
function myOnload(){
	console.log('Load done');
}
function myMouseDown(){
	console.log('onmousedown');
}
function myMouseMove(){
	console.log('onmosemove');
}
function myMouseOver(ob){
	ob.width = 500;
	ob.height = 500;
}
function myMouseOut(ob){
	ob.width = 300;
	ob.height = 50;
}
function myMouseUp(){
	console.log('onmouseup');
}
function myReset(){
	console.log('Vừa bấm nút reset');
}
function mySubmit(){
	console.log('Vừa bấm nút submit');
}
function myResize(ob){
	let w = ob.width;
	let h = ob.height;
	console.log(`width: ${w} va height: ${h}`);
}
function mySelect(ob){
	console.log(ob.value);
}
function myUnLoad(){
	return "exit";    // khong tac dung
}
window.onbeforeunload = function(){
		return "exit";
}