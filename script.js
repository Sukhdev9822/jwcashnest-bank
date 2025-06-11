// Password toggle
function togglePasswordVisibility(id, iconId) {
  const input = document.getElementById(id);
  const icon = document.getElementById(iconId);
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

// Balance toggle
function toggleBalance(id, btnId) {
  const balanceEl = document.getElementById(id);
  const btn = document.getElementById(btnId);
  if (balanceEl.innerText.includes('*****')) {
    balanceEl.innerText = '₹ 8,95,74,000.52';
    btn.innerText = 'Hide Balance';
  } else {
    balanceEl.innerText = '*****';
    btn.innerText = 'Show Balance';
  }
}
// Login logic
function loginUser(event) {
  event.preventDefault();
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("loginError");

  if (userId === "Sukhdevmondal147258" && password === "JW-5858") {
    window.location.href = "home.html";
  } else {
    errorEl.style.display = "block";
  }
}
