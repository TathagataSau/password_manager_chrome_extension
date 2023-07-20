const backendUrl = 'http://127.0.0.1:5000'; // Replace with your backend URL

document.getElementById('save').addEventListener('click', function () {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch(`${backendUrl}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error:', error.message);
  });
});

document.getElementById('fetch').addEventListener('click', function () {
  const username = document.getElementById('username').value;

  fetch(`${backendUrl}/fetch/${username}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.password) {
      document.getElementById('password').value = data.password;
    } else {
      console.log(data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
});
