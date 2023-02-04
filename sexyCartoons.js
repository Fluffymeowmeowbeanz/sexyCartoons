let slideIndex=0;
showSlides(slideIndex);

//Slides
function showSlides(n) {
	let slides = document.getElementsByClassName("mySlides");
	let captionText = document.getElementById("caption");

	//starting point
	if(n == 0){
		slides[slideIndex].style.display = "block";
		slides[slideIndex].className += " active";
		captionText.innerHTML = document.getElementsByTagName("img")[slideIndex].alt;
	}
	else{
		slides[slideIndex].style.display = "none";
		//When adding 1 
		if(n > 0){
			//If out of bounds, go to start
			if( (slideIndex + n) > (slides.length - 1) ){
				slideIndex = 0;
				slides[slideIndex].style.display = "block";
			}
			//If not out of bounds, continue on
			else{
				slideIndex += n;
				slides[slideIndex].style.display = "block";
			}
		}
		//When adding -1
		else{
			//If out of bounds, got to end
			if( (slideIndex + n) < 0){
				slideIndex = slides.length - 1;
				slides[slideIndex].style.display = "block";
			}
			//If NOT out of bounds, continue on backwards
			else {
				slideIndex += n;
				slides[slideIndex].style.display = "block";
			}
		}
	captionText.innerHTML = document.getElementsByTagName("img")[slideIndex].alt;
	}
}