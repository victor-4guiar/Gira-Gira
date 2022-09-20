function loopar(l=1){
	for(c=0;c<l;c++){
		let box = document.getElementById('box');
		let helice = document.getElementById('helice');
		let square = document.createElement('div');
		square.classList.add('square');
		helice.appendChild(square);
	}
}

function wrenhoo(){
	let song = new Audio('arc.mp3');
	song.play();
	let box = document.getElementById('box');
	box.remove();
	document.body.style.backgroundColor = 'black';
	let neko = document.createElement('img');
	neko.setAttribute('src', 'neco-arc.gif');
	neko.classList.add('neko', 'aprox');
	document.getElementById('title').innerHTML = 'W reñoo';
	document.body.appendChild(neko);
	setTimeout(()=>{
		neko.style.width = '250px';
		neko.style.height = '250px';
	}, 2 * 500);
}