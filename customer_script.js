function logout() {
  const confirmLogout = confirm("Are you sure you want to log out?");
  
  if (confirmLogout) {
    window.location.href = 'login.html';
    
    setTimeout(() => {
      alert("You have successfully logged out!");
    }, 100);
  }
}