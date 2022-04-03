 let indexValue = 1;
 const img = document.querySelectorAll('img');
 showImg(indexValue);
 function btm_slide(slideNumber){
	 indexValue = slideNumber
	 showImg(indexValue);
 }
 function side_slide(slideNumber){
	 indexValue += slideNumber
	 showImg(indexValue);
 }
      function showImg(slideNumber){
        const slider = document.querySelectorAll('.btm-slides span');
        if(slideNumber > img.length){indexValue = 1}
        if(slideNumber < 1){indexValue = img.length}
        for(let image of img){
          image.style.display = "none";
        }
        for(let sliderValue of slider){
          sliderValue.style.background = "rgba(255,255,255,0.1)";
        }
        img[indexValue-1].style.display = "block";
        slider[indexValue-1].style.background = "white";
        previousButton();
        nextButton();
      }
      function previousButton() {
	if(indexValue === 1){
    	   element = document.getElementById("previous");
    	   element.style.display = "none";
        }else {
   	   element = document.getElementById("previous");
    	   element.style.display = "block";
	}
      }
     function nextButton() {
	if(indexValue === img.length){
    	   element = document.getElementById("next");
    	   element.style.display = "none";
        }else {
   	   element = document.getElementById("next");
    	   element.style.display = "block";
	}
      }
