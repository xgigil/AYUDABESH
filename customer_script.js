function logout() {
  const confirmLogout = confirm("Are you sure you want to log out?");
  
  if (confirmLogout) {
    window.location.href = 'login.html';
    
    setTimeout(() => {
      alert("You have successfully logged out!");
    }, 100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-btn');
  const links = document.querySelector('.links');
  const closeBtn = document.querySelector('.close-btn');

  console.log('Hamburger:', hamburger);
  console.log('Links:', links);
  console.log('Close btn:', closeBtn);

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked');
      if (links) {
        links.classList.add('show-menu');
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      console.log('Close btn clicked');
      if (links) {
        links.classList.remove('show-menu');
      }
    });
  }

  if (links) {
    const menuLinks = links.querySelectorAll('a');
    menuLinks.forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('show-menu');
      });
    });
  }
});