const app = Vue.createApp({
	data() {
		return {
			arrImages: [
				'img/01.webp',
				'img/02.webp',
				'img/03.webp',
				'img/04.webp',
				'img/05.webp',
			],
			activeIndex: 0,
			interval: setInterval(this.next, 3000),
			isActive: false
		}
	},
	methods: {
		selected(i){
			this.activeIndex = i;
		},
		mouseOver() {
			clearInterval(this.interval);
		},
		mouseLeave() {
			this.interval = setInterval(this.next, 3000);
		},
		next() {
			// settiamo il nuovo valore di active index
			this.activeIndex++;
			if (this.activeIndex >= this.arrImages.length) {
				this.activeIndex = 0;
			}
			// caroselText.innerHTML = write(activeIndex);
		},
		prev() {
			// settiamo il nuovo valore di active index
			this.activeIndex--;
			if (this.activeIndex < 0) {
				this.activeIndex = this.arrImages.length - 1;
			}
			// caroselText.innerHTML = write(activeIndex);
		},
		write(num) {
			let toReturn;
			switch (num) {
				case 0:
					toReturn = "Spiderman"
					break;
				case 1:
					toReturn = "Ratchet & Clank";
					break;
				case 2:
					toReturn = "Fortnite";
					break;
				case 3:
					toReturn = "Stray"
					break;
				case 4:
					toReturn = "Avengers";
					break;
				default:
					toReturn = "None"
					break;
			}
			console.log(num)
			return toReturn;
		}
	}
});

app.mount("#app");




// const containerHighlighted = document.querySelector('.highlighted');
// const containerThumbs = document.querySelector('.thumbs');

// for (let i = 0; i < images.length; i++) {
//     containerHighlighted.innerHTML += 
//     `<div class="img_container ${i == 0 ? 'active' : ''}">
//     <img src="${images[i].image}" alt="" class="${i == 0 ? 'active' : ''}">
//     <h2 class="title">${images[i].title}</h2>
//     <p class="text">${images[i].text}</p>
//     </div>`;
// 	containerThumbs.innerHTML += 
//     `<img src="${images[i].image}" alt="" class="${i == 0 ? 'active' : ''}">`;
// }


// // selezioniamo le immagini nell'html
// const listHighlighted = document.querySelectorAll('.highlighted .img_container');
// // selezioniamo le miniature
// const listThumbs = document.querySelectorAll('.thumbs img');
// // selezioniamo i bottoni
// const btnPrev = document.querySelector('.btn-prev');
// const btnNext = document.querySelector('.btn-next');
// const btnReverse = document.querySelector('.inverso')
// // definito una variabile che rappresenta lo stato attuale del carosello
// // cioe' l'indice dell'immagine attiva
// let activeIndex = 0;

// let setIntervalReverse= setInterval(() => {
//         listHighlighted[activeIndex].classList.remove('active');
//         listThumbs[activeIndex].classList.remove('active');
//         // settiamo il nuovo valore di active index
//         activeIndex++;
//         if (activeIndex >= listHighlighted.length) {
//             activeIndex = 0;
//         }
//         // alla nuova immagine attiva aggiungiamo la classe active
//         listHighlighted[activeIndex].classList.add('active');
//         listThumbs[activeIndex].classList.add('active');
//     }, 3000);

//     btnReverse.addEventListener('click',
//     function(){
//         clearInterval(setIntervalReverse);
//         setInterval(()=>{
//             listHighlighted[activeIndex].classList.remove('active');
// 		listThumbs[activeIndex].classList.remove('active');
// 		// settiamo il nuovo valore di active index
// 		activeIndex--;
// 		if (activeIndex < 0) {
// 			activeIndex = listHighlighted.length - 1;
// 		}
// 		// alla nuova immagine attiva aggiungiamo la classe active
// 		listHighlighted[activeIndex].classList.add('active');
// 		listThumbs[activeIndex].classList.add('active');
//         }
//         , 3000);
        
//     });
// btnNext.addEventListener('click',
// 	function() {
// 		// dall'immagine attiva tolgo la classe active
// 		listHighlighted[activeIndex].classList.remove('active');
// 		listThumbs[activeIndex].classList.remove('active');
// 		// settiamo il nuovo valore di active index
// 		activeIndex++;
// 		if (activeIndex >= listHighlighted.length) {
// 			activeIndex = 0;
// 		}
// 		// alla nuova immagine attiva aggiungiamo la classe active
// 		listHighlighted[activeIndex].classList.add('active');
// 		listThumbs[activeIndex].classList.add('active');
// 	}
// );

// btnPrev.addEventListener('click',
// 	function() {
// 		// dall'immagine attiva tolgo la classe active
// 		listHighlighted[activeIndex].classList.remove('active');
// 		listThumbs[activeIndex].classList.remove('active');
// 		// settiamo il nuovo valore di active index
// 		activeIndex--;
// 		if (activeIndex < 0) {
// 			activeIndex = listHighlighted.length - 1;
// 		}
// 		// alla nuova immagine attiva aggiungiamo la classe active
// 		listHighlighted[activeIndex].classList.add('active');
// 		listThumbs[activeIndex].classList.add('active');
// 	}
// );

// // ciclo per aggiungere gli event listeners alle miniature
// for (let i = 0; i < listThumbs.length; i++) {
// 	listThumbs[i].addEventListener('click',
// 		function() {
// 			console.log('cliccata la miniature in posizione ' + i)
// 			listHighlighted[activeIndex].classList.remove('active');
// 			listThumbs[activeIndex].classList.remove('active');
// 			activeIndex = i;
// 			listHighlighted[activeIndex].classList.add('active');
// 			listThumbs[activeIndex].classList.add('active');
// 		}
// 	)
// }