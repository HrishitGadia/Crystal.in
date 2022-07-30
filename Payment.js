// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        else {
          SetData();
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBba4xve68Vq21g8k3JCa2xXliBiufxOOg",
  authDomain: "crystal-shopping-database.firebaseapp.com",
  databaseURL: "https://crystal-shopping-database-default-rtdb.firebaseio.com",
  projectId: "crystal-shopping-database",
  storageBucket: "crystal-shopping-database.appspot.com",
  messagingSenderId: "969167995602",
  appId: "1:969167995602:web:94ef5a264e17d3f320a30b"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var Id = localStorage.getItem('UserId');
var Code = '';
Total2 = 0;
Total3 = 0;
function getdata() {
  firebase.database().ref('users/' + Id + '/User Cart').on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      if (childKey != "status") {
        ProductId = childKey;
        ProductData = childData;
        Stars = ProductData['Stars'];
        Name = ProductData['Name'];
        PriceBefore = ProductData['PriceBefore'];
        PriceAfter = ProductData['PriceAfter'];
        Description = ProductData['Description'];
        Availability = ProductData['Availability'];
        Total = ProductData['Total'];
        Logo = ProductData['Logo'];
        Image01 = ProductData['Image01'];
        Image02 = ProductData['Image02'];
        Image03 = ProductData['Image03'];
        Color01 = ProductData['Color01'];
        Color02 = ProductData['Color02'];
        Color03 = ProductData['Color03'];
        not = Number(PriceAfter);
        Total2 = Total2 + not;
        quantity = document.getElementById('quantity').innerHTML;
        Total3 = Total3 + 1;
        Item = document.getElementById('Objects').innerHTML;
        Code = Code + '<li class="list-group-item d-flex justify-content-between lh-condensed"> <div> <h6 class="my-0">' + Name + '</h6> <small class="text-muted">' + Description + '</small> </div> <span class="text-muted">' + PriceAfter + '</span> </li>';
        document.getElementById('Objects').innerHTML = Item + Code;
        document.getElementById('quantity').innerHTML = Total3;
        document.getElementById('Paying').innerHTML = Total2;
      }
    });
  });
}
getdata();

function SetData() {
  console.log('Called')
  //variables
  FirstName = document.getElementById('firstName').value;
  LastName = document.getElementById('lastName').value;
  UserName = document.getElementById('username').value;
  Email = document.getElementById('email').value;
  Address = document.getElementById('address').value;
  Address2 = document.getElementById('address2').value;
  Country = document.getElementById('country').value;
  State = document.getElementById('state').value;
  Zip = document.getElementById('zip').value;


  firebase.database().ref('Order/'+Id).push({
    FirstName : FirstName,
    LastName : LastName,
    UserName : UserName,
    Email : Email,
    Address : Address,
    Address2 : Address2,
    Country : Country,
    State : State,
    Zip : Zip
  });
}