 // Get the modal
 var modal = document.getElementById("myModal");

 // agafem la imatge i el seu text alternatiu pero mostrar-los quan es cliqui al modal
 var img = document.getElementsByClassName("myImg");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");

 // Hem fet un getElementsByClassName perque per Id només agafa un element i com tenim 20 fotos necessitem un array d'elements que es recorrin
 // amb un for, llavors cada cop que cliquem a una foto s'executa el seguent codi

 for (let index = 0; index < img.length; index++) {
     img[index].onclick = function() {
         modal.style.display = "block";
         modalImg.src = this.src;
         captionText.innerHTML = this.alt;
     }
 }

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }