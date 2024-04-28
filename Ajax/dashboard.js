// Retrieve user data from localStorage
var usersJson = localStorage.getItem('users');

// Parse JSON string into an array
var users = JSON.parse(usersJson);

// Reference to the table body
var tableBody = document.getElementById('userTableBody');

// Generate HTML markup for each user
users.forEach(function (user) {
    var row = document.createElement('tr');
    var idCell = document.createElement('td');
    var nameCell = document.createElement('td');

    idCell.textContent = user.username;
    nameCell.textContent = user.name;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    tableBody.appendChild(row);
});
