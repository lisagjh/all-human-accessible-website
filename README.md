# Accessible Website
Ontwerp en maak voor een opdrachtgever een component/pagina/site toegankelijk volgens WCAG richtlijnen.

## Inhoudsopgave
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

Dit project is een opvolging op de vorige opdracht, [the client website](https://github.com/lisagjh/the-client-website).

User Story:
> Familieoverzicht abonnementen ontwerpen en ontwikkelen. Toon in een overzicht alle abonnementen van een familie met een verwijzing naar een indiviueel profiel van elk familielid.

![Schermafbeelding 2023-11-02 om 09 42 06](https://github.com/lisagjh/all-human-accessible-website/assets/131701505/0f2f1c8c-148f-43a1-aab1-e12c85873337)

👉 De site is hier te bekijken: https://lisagjh.github.io/all-human-accessible-website/


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

Deze website is gemaakt met HTML, CSS en JavaScript.

### JavaScript
Dit is de eerste keer dat ik JavaScript heb gebruikt voor een project. Deze code is voor de dropdown menu. Hiervoor heb ik [deze tutorial van w3schools](https://www.w3schools.com/howto/howto_js_dropdown.asp) gebruikt.

Dit stukje code is om ervoor te zorgen dat als de gebruiker op de knop klikt, er getoggled word tussen ```show``` en ```hide```.
 ```
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
```

Deze code zorgt ervoor dat de dropdown ook sluit als de gebruiker er buiten klikt.

```window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
```

Ook heb ik JavaScript gebruikt om de carousels te maken. Hiervoor heb ik een [artikel van medium.com](https://medium.com/@algopoint.ltd/how-to-create-a-slideshow-carousel-using-html-css-js-7ab0561b39b3) gebruikt.

Deze code geeft de buttons functionaliteit en verbind het als het ware met de eventListener.
```
const prev = document.getElementById('prev-btn1')
const next = document.getElementById('next-btn1')
const list = document.getElementById('item-list1')
```

Deze code zorgt ervoor dat als een gebruiker op de button klikt, de carousel ook echt die kant op beweegt. 
```
prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})
```
