var getUser = function() {
  axios.get('/users').then(res => {
    var tbody = document.querySelector('#user-list tbody');
    // console.log('res');
    // console.log(res);
    tbody.innerHTML = '';
    res.data.map(user => {
      var tr = document.createElement('tr');
      var id = document.createElement('td');
      var name = document.createElement('td');
      var age = document.createElement('td');
      var married = document.createElement('td');
      id.textContent = user.id;
      name.textContent = user.name;
      age.textContent = user.age;
      console.log(user.married);
      married.textContent = user.married === true ? '기혼' : '미혼';
      tr.appendChild(id);
      tr.appendChild(name);
      tr.appendChild(age);
      tr.appendChild(married);
      tbody.appendChild(tr);
    });
  });
};

var getComment = function(id) {};

document.querySelector('#user-form').addEventListener('submit', e => {
  e.preventDefault();
  //   e.target;
  var username = document.querySelector('#username');
  var age = document.querySelector('#age');
  var married = document.querySelector('#married');
  // console.log(docuemnt);
  // console.dir(username);
  // console.log(age);
  // console.log(married.checked);
  axios
    .post('/users', {
      name: username.value,
      age: age.value,
      married: married.checked,
    })
    .then(res => {
      console.log(res);
      username.value = '';
      age.value = '';
      married.checked = false;
      getUser();
    })
    .catch(err => {
      console.error(err);
    });
});
