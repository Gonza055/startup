let mockDatabase = {
  users: [],
  resources: []
};

function addUserToDatabase(username) {
  mockDatabase.users.push(username);
  console.log('User added:', username);
  saveToLocalStorage();
  displayUsers();
}

function displayUsers() {
  const usersContainer = document.getElementById('usersContainer');
  if (usersContainer) {
    usersContainer.innerHTML = '<h2>Active Users</h2>';
    mockDatabase.users.forEach(user => {
      const userElement = document.createElement('div');
      userElement.innerText = user;
      usersContainer.appendChild(userElement);
    });
  }
}

function saveToLocalStorage() {
  localStorage.setItem('mockDatabase', JSON.stringify(mockDatabase));
}

function loadFromLocalStorage() {
  const loadedData = localStorage.getItem('mockDatabase');
  if (loadedData) {
    mockDatabase = JSON.parse(loadedData);
    displayUsers();
  }
}

window.onload = function() {
  loadFromLocalStorage();
  mockRealtimeData();
};

function mockRealtimeData() {
  setInterval(() => {
    const randomUser = 'User' + Math.floor(Math.random() * 100);
    addUserToDatabase(randomUser);
    console.log('Mocked real-time data added:', randomUser);
  }, 5000); // Add a random user every 5 seconds
}

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = this.email.value;
      addUserToDatabase(email);
      alert(`Registered/Login as ${email}`);
    });
  });
});

