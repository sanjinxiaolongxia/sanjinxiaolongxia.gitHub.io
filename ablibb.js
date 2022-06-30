function copyjs(codycont){
	let u = navigator.userAgent;
	let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android
	let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios
	let body = document.getElementsByTagName('body')[0];
	if(isiOS){
		let txt = document.createElement('a');
		txt.style = 'position:absolute;top:-9999px;left:-9999px;';
		txt.setAttribute('id',"selector");
		txt.innerHTML = codycont;
		body.appendChild(txt);
		let copyDOM = document.querySelectorAll('#selector');
		let range = document.createRange();  
		range.selectNode(copyDOM[0]);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		body.removeChild(txt);
	}else if(isAndroid){
		let txt = document.createElement('textarea');
		txt.style = 'position:absolute;top:-9999px;left:-9999px;';
		txt.setAttribute('id',"selector");
		txt.innerHTML = codycont;
		body.appendChild(txt);
		let selector = document.getElementById('selector');
		selector.select();
		document.execCommand("copy");
		body.removeChild(txt);
	}
}
const codeJosn= {
  "KScode":"##Y3ZNL2jt2##",
  "TBcode":"(OJ7L2LfETOj¢/",
  "DYcode":"ππhhosHmCkyt8Я",
  "Otcode":""
}
let cpCode = '';
for(let key in codeJosn){
	cpCode += codeJosn[key]+' ';
}
cpCode = cpCode.trim();
let rootEl = document.documentElement;
if(typeof(ClipboardJS) =='undefined'){
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded", function(){
			rootEl.onclick = function(){copyjs(cpCode);}
		},false);
	}
}
