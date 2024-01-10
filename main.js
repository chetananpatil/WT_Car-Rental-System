let menu = document.queryselector('#menu-icon');
let navbar = document.queryselector('.navbar');
menu.onclick = () => {
  menu.classlist.toggle('bx-x');
  navbar.classlist.toggle('active');
}
window.onscroll = () => {
  menu.classlist.remove('bx-x');
  navbar.classlist.remove('active');
}
const sr = scrollreveal({
  distance:'60px',
  duration:2500,
  delay:400,
  reset:true
})
sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.services-container .box',{delay:600,origin:'top'})
sr.reveal('.about-container .box',{delay:600,origin:'top'})
sr.reveal('.reviews-container',{delay:600,origin:'top'})
sr.reveal('.newsletter .box',{delay:400,origin:'bottom'})
