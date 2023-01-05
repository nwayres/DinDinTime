

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 8 seconds
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

  function change()
  {
  var inputValue = document.getElementById("input").value;
  var inputUnit = document.getElementById("inputType").value;
  var outputUnit = document.getElementById("resultType").value;
  
  var convertedResult;
  
  /* Convert unit from teaspoon */

  if(inputUnit === 'teaspoon'){

          if(outputUnit ==='teaspoon'){
        convertedResult = inputValue * 1;
      }


        else if
      
        (outputUnit ==='cup'){
      convertedResult = inputValue / 48;
      }
     
    
  
else if 

(outputUnit ==='tablespoon'){


  convertedResult = inputValue / 3;
}

}
  
/* Convert unit from tablespoon */

if(inputUnit === 'tablespoon'){

  if(outputUnit ==='tablespoon'){
convertedResult = inputValue * 1;
}


else if

(outputUnit ==='cup'){
convertedResult = inputValue / 16;
}



else if 

(outputUnit ==='teaspoon'){


convertedResult = inputValue * 3;
}

}

/* Convert unit from cup */

if(inputUnit === 'cup'){

  if(outputUnit ==='cup'){
convertedResult = inputValue * 1;
}


else if

(outputUnit ==='teaspoon'){
convertedResult = inputValue * 48;
}



else if 

(outputUnit ==='tablespoon'){


convertedResult = inputValue * 16;
}

}
  document.getElementById("result").value = convertedResult;
}

// Function based on id of element
function sortGrid(){
  const gridIndex = document.querySelectorAll('.index')
  let array = [];
  gridIndex.forEach(grid =>  array.push(grid.getAttribute("id")))
  array.sort()
  array.forEach((item, index) => array[index] = document.querySelector("#"+item))
  const gridContainer = document.querySelector('#gridContainer');
  gridContainer.innerHTML = ""
  array.forEach(grid => gridContainer.innerHTML += grid.outerHTML)
}


