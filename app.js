var plates = [
  {
    Name: "Salmon",
    Day: "Monday",
    Type: "Fish",
    Price: 8,
    img:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
  },
  {
    Name: "Lasagna",
    Day: "Monday",
    Type: "Meat",
    Price: 7,
    img:
      "https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg",
  },
  {
    Name: "Sardines",
    Day: "Tuesday",
    Type: "Fish",
    Price: 6,
    img:
      "https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg",
  },
  {
    Name: "Chicken",
    Day: "Tuesday",
    Type: "Meat",
    Price: 5,
    img:
      "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
  },
  {
    Name: "Fish And Chips",
    Day: "Wednesday",
    Type: "Fish",
    Price: 5,
    img:
      "https://cdn.pixabay.com/photo/2017/12/26/04/51/fish-and-chip-3039746_960_720.jpg",
  },
  {
    Name: "Hamburguer",
    Day: "Wednesday",
    Type: "Meat",
    Price: 4,
    img:
      "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg",
  },
  {
    Name: "Sushi",
    Day: "Thursday",
    Type: "Fish",
    Price: 10,
    img:
      "https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg",
  },
  {
    Name: "Spaghetti bolognese",
    Day: "Thursday",
    Type: "Meat",
    Price: 7,
    img:
      "https://cdn.pixabay.com/photo/2019/10/13/14/23/spaghetti-bolognese-4546233_960_720.jpg",
  },
  {
    Name: "Chicken",
    Day: "Friday",
    Type: "Fish",
    Price: 6,
    img:
      "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
  },
  {
    Name: "Fish Soup",
    Day: "Friday",
    Type: "Meat",
    Price: 7,
    img:
      "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg",
  },
];

function lowerCasePlates(){
 for(var i = 0; i < plates.length; i++){
  for (var key in plates[i]) {
   if(key.toLowerCase() !== key){
    plates[i][key.toLowerCase()] = plates[i][key];
    delete plates[i][key];
   }
  }
 }
 // console.log(plates);
}
lowerCasePlates();

const meals = document.querySelector(".meals");

function displayMenu(item) {
  let div = document.createElement("div");
  div.setAttribute("class", "dish-box");
  div.innerHTML = `<img class="dish-image" src="${item.img}" alt="${item.name}"/>
                <div class="dish-info">
                  <div>
                    <div class="dish-details">
                      <div class="dish-day">
                        <i class="far fa-calendar-alt"></i>
                        <p>${item.day}</p>
                      </div>
                      <div class="dish-type">
                        <i class="fas fa-utensils"></i>
                        <p>${item.type}</p>
                      </div>
                      <div class="dish-price">
                        <i class="fas fa-wallet"></i>
                        <p>${item.price}€</p>
                      </div>
                    </div>
                    <h4 class="dish-name">${item.name}</h4>
                  </div>
                </div>`;
  meals.appendChild(div);
}
function getDishes() {
  plates.forEach((item) => {
    displayMenu(item);
  });
}

window.onload = function () {
  this.getDishes();
};



// modal close and open
function startModal(choosenModal) {
  var modal = document.getElementById(choosenModal);
  if(modal) {

    modal.classList.add('open-modal');
    modal.addEventListener('click', (x) => {
      if(x.target.id == choosenModal || x.target.className == 'close-button') {
        modal.classList.remove('open-modal');
      }
    });
  }
}

var buttonLogin = document.querySelector('.login-user');
buttonLogin.addEventListener('click', () => startModal('login-container'));

var buttonRegister = document.querySelector('.register-user');
buttonRegister.addEventListener('click', () => startModal('register-container'));

var linkRegister = document.querySelector('.register-thru-login');
linkRegister.addEventListener('click', () => startModal('register-container'));



function storeUsers(){
    var name = document.getElementById('name');
    var password = document.getElementById('password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(password.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && password.value.length == 0){
        alert('Please fill in email and password');

    }else if(password.value.length > 8){
        alert('Max of 8');

    }else if(!password.value.match(numbers)){
        alert('please add 1 number');

    }else if(!password.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!password.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('password', password.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPassword = localStorage.getItem('password');

    var userName = document.getElementById('userName');
    var userPassword = document.getElementById('userPassword');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPassword.value == storedPassword){
        alert('You are logged in.');
    }else{
        alert('Error on login.');
    }
}
// //function to store user name and password
//    function store(theForm) {
//     document.getElementById('welcomeMessage').innerHTML = "";
//     var inputUsername= theForm["username"];
//     var inputPassword= theForm["password"];
//     localStorage.setItem("username", inputUsername.value);
//     localStorage.setItem("password", inputPassword.value);
//     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
//     return false;
//    } // end store()
// //function to sign in
//    function login(theForm) {
//     document.getElementById('welcomeMessage').innerHTML = "";
//     var inputUsername = theForm["username"];
//     var inputPassword = theForm["password"];
//     var username = inputUsername.value;
//     var password = inputPassword.value;
//     if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
//      document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
//       } else {
//      document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
//     }
//     return false;
//    } // end login()

