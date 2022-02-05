let users = [
  'Rose',
  'Sunflower',
  'Lotus',
  'Lilly',
  'Parrot',
'Peacock',
'Eagle',
'Dove',
'Tiger',
'Panda',
'Deer',
'Elephant'
];
debugger;
ul = document.getElementById("items");

let render_lists = function(lists){
  let li = "";
  for(index in lists){
    li += "<li onclick = selectValue(this.innerHTML) value="+lists[index]+">" + lists[index] + "</li>";
  }
  ul.innerHTML = li;
}

render_lists(users);
let input = document.getElementById('filter');
let filter = function(event){
  keyword = input.value.toLowerCase();
  filtered = users.filter(function(user){
        user = user.toLowerCase();
       return user.indexOf(keyword) > -1; 
  });
 if (keyword === ""){
     ul.style.display = "none";
  }else {
  ul.style.display = "block";
}
  render_lists(filtered);
}
input.addEventListener('keyup',(e) => {    
     filter(e);
     filterImages(e);    
});
let selectValue = function(selectedvalue) {
  document.getElementById('filter').value=selectedvalue;
  ul.style.display = "none";
}
var imageName = document.querySelectorAll(".flower_title p");
function filterImages(event) {
    imageName.forEach(function(image) {
     const text = event.target.value.toLowerCase();
        const item = image.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            image.parentElement.parentElement.style.display = "block";
        } else {
            image.parentElement.parentElement.style.display = "none";
        }
    })
}
function showImage() {
 finalValue = document.getElementById('filter').value;
 imageName.forEach(function(image) {
         if (!finalValue === image.firstChild.textContent || image.firstChild.textContent.charAt(0).toUpperCase() + image.firstChild.textContent.slice(1) ) {
           image.parentElement.parentElement.style.display = "none";
        }
})
}
