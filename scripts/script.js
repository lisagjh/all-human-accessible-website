// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
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


// carousel 

const prev = document.getElementById('prev-btn1')
const next = document.getElementById('next-btn1')
const list = document.getElementById('item-list1')

const prev2 = document.getElementById('prev-btn2')
const next2 = document.getElementById('next-btn2')
const list2 = document.getElementById('item-list2')

const prev3 = document.getElementById('prev-btn3')
const next3 = document.getElementById('next-btn3')
const list3 = document.getElementById('item-list3')

const itemWidth = 150
const padding = 10


prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})


prev2.addEventListener('click',()=>{
  list2.scrollLeft -= (itemWidth + padding)
})

next2.addEventListener('click',()=>{
  list2.scrollLeft += (itemWidth + padding)
})


prev3.addEventListener('click',()=>{
  list3.scrollLeft -= (itemWidth + padding)
})

next3.addEventListener('click',()=>{
  list3.scrollLeft += (itemWidth + padding)
})