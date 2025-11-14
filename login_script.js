document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedRole = document.querySelector('input[name="role"]:checked').value;

    if (selectedRole === 'customer') {
      window.location.href = 'customer_dashboard.html';
    } else if (selectedRole === 'provider') {
      window.location.href = 'provider_dashboard.html';
    }
  });
});