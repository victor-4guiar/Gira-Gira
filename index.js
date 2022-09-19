function loopar(l=1){
	for(c=0;c<l;c++){
		let box = document.getElementById('box');
		let helice = document.getElementById('helice');
		let square = document.createElement('div');
		square.classList.add('square');
		helice.appendChild(square);
	}
}