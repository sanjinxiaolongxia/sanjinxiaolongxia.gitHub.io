if (!(/Win|mac/i.test(navigator.platform))) { 
	/*
	const bodyEl =  document.querySelector('body');
	const webSrc=`
		<a href="https://u.jd.com/cz5JIrn" rel="nofollow">
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
	*/
	const bodyEl =  document.querySelector('body');
	const webSrc=`
		<div id="hbWarp" style="position:fixed;inset:0;background-color:#00000050;display:flex;flex-direction:column;row-gap:10px;justify-content:center;align-items:center;">
		<div style="width:76%;max-width:280px;"><a href="https://ym.ksjhaoka.com/?s=WUCDUso228400" rel="nofollow"><img src="https://www.2898.com/ueditor/php/upload/image/20240214/1707915540933531.jpg" width="100%"/></a></div>
		<div id="closeBtn" style="box-sizing:border-box;border:2px solid #fff;width:38px;height:38px;border-radius:100%;display:flex;justify-content:center;align-items:center;padding:6px;cursor:pointer;"><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%"><path d="M834.73 961.34c-18.08 0-36.19-6.72-50.26-20.24-234.14-225.14-636.1-713.8-653.1-734.49-25.43-30.95-20.94-76.66 10.01-102.09 31-25.42 76.63-20.93 102.08 10.01 4.11 5.01 413.56 502.78 641.53 722 28.87 27.76 29.77 73.68 2.01 102.56-14.24 14.8-33.24 22.25-52.27 22.25z" p-id="5187" fill="#ffffff"></path><path d="M192.99 937.15c-18.16 0-36.31-6.76-50.38-20.35-28.8-27.82-29.61-73.74-1.79-102.56C387.41 558.86 762.15 95.47 765.91 90.82c25.17-31.16 70.85-36 101.99-10.85 31.16 25.17 36.03 70.84 10.86 102C863.25 201.15 496.25 654.95 245.17 915c-14.24 14.74-33.2 22.15-52.18 22.15z" fill="#ffffff"></path></svg></div>
		</div>
		`;
	const webEl = document.createElement('div');
	webEl.innerHTML = webSrc;
	bodyEl.append(webEl);
	const hbWarp = document.getElementById('hbWarp')
	const closeBtn = document.getElementById('closeBtn')
	closeBtn.addEventListener('click',function(){
		hbWarp.style.display = 'none'
	})
	
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
