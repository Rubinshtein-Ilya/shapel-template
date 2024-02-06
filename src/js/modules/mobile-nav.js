function openNav () {
	const menuBtn = document.querySelector('#menu-btn');
	const overlay = document.querySelector('#myNav');

	const toggleMenu = () => {
		menuBtn.classList.toggle('burger-close');
		overlay.classList.toggle('overlay-visible');
	}

	menuBtn.addEventListener('click', toggleMenu);	
}


export default openNav;