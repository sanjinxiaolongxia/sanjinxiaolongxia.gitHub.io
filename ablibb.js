let hardware = navigator.platform;
let isPhone = !(hardware.indexOf("Win") != -1 || hardware.indexOf("mac") != -1)
if(isPhone){
	const codeJosn= {
		"KScode":"##Y4iMTPQyx##",
		// "KScode2":"##X1WQuQqOUlcZmTz##",
		"TBcode":"(UnGC2uoYmGO¢/",
		"DYcode":"ηηJQA5kd718v8▽▽",
		"Otcode":""
	}
	let cpCode = '';
	for(let key in codeJosn){
		cpCode += codeJosn[key]+' ';
	}
	cpCode = cpCode.trim();
	let aNodes = document.querySelectorAll('a')
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
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JIwR1UOaTDF8qRPo\",ck:\"JIwR1UOaTDF8qRPo\"});</script>")
