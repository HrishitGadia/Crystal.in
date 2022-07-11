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
  //work()
  
  
  //Variables
  var Code = []
  var Total2 = 0;
  var TStars = ' <i class="bx bxs-star"></i>';
  function getdata() {
    firebase.database().ref("/" + 'User Cart').on('value', function (snapshot) {
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
         not =  Number(PriceAfter);
          Total2 = Total2 + not;
          Item = document.getElementById('Objects').innerHTML;
          Code = Code + " <p><a> " +Name + "</a> <span class='price'>" + PriceAfter + "</span></p>";
          document.getElementById('Objects').innerHTML = Item + Code;
          document.getElementById('Paying').innerHTML = Total2;
        }
      });
    });
  }
  getdata();
  
  function submit(Element) {
    firebase.database().ref('User Cart/' + Element).remove();
    location.reload();
  }