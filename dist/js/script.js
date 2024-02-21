// Navbar fixed
window.onscroll = function (){
    const header = document.querySelector('header');
    const fixedNav  = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

//email
function sendMail(event) {
  event.preventDefault(); // Menghentikan pengiriman formulir bawaan browser

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    // Menampilkan pesan kesalahan jika ada kolom yang kosong
    Swal.fire({
      title: "Error",
      text: "Please ensure all fields are filled",
      icon: "error"
    });
    return;
  }

  // Lanjutkan dengan pengiriman email karena semua kolom telah diisi
  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_6nl4xnh";
  const templateID = "template_jk4cg6r";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      Swal.fire({
        title: "The email has been sent",
        text: "Thank you",
        icon: "success"
      });
    })
    .catch(err => console.log(err));
}


var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '5rem',
  focus  : 'center',
  perPage: 2,
} );

splide.mount();
 
