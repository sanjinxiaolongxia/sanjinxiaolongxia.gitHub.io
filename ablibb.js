let hardware = navigator.platform;
let isPhone = !(hardware.indexOf("Win") != -1 || hardware.indexOf("mac") != -1)
if(isPhone){
	const codeJosn= {
		"KScode":"##Y4iMTPQyx##",
		"TBcode":"(4buO2v2eVPD¢/",
		"DYcode":"￥T55Z66ePf5m9Z3Mj%",
		"Otcode":"ЮzyYkT4ySkv8￠￠"
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
