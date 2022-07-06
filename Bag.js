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
  var Changer;
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
          Image01 = ProductData['Image01'];
          Image02 = ProductData['Image02'];
          Image03 = ProductData['Image03'];
          Color01 = ProductData['Color01'];
          Color02 = ProductData['Color02'];
          Color03 = ProductData['Color03'];
          Code = '<div class="product-card"> <div class="logo-cart"> <img src="logo.jpg" alt="logo"> </div> <div class="main-images"> <img id="'+ProductId+'blue" class="blue active" src="' + Image01 + '" alt="blue"> <img id="' + ProductId+'pink" class="pink" src="' + Image02 + '" alt="pink"> <img id="'+ProductId+'yellow" class="yellow" src="' + Image03 + '" alt="yellow"> </div> <br> <div class="shoe-details"> <span class="shoe_name" id="'+ProductId+'Name">' + Name + '</span> <p id="'+ProductId+'Des">' + Description + '</p> <div class="stars"> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bx-star"></i> </div> </div> <div class="color-price"> <div class="color-option"> <span class="color">Colour:</span> <div class="circles"> <span class="circle ' + Color01 + ' active" id="'+ProductId+'C1"></span> <span class="circle ' + Color02 + '" id="'+ProductId+'C2"></span> <span class="circle ' + Color03 + ' " id="'+ProductId+'C3"></span> </div> </div> <div class="price"> <span class="price_num" id="'+ProductId+'PriceNum">' + PriceAfter + '</span> <span class="price_letter" id="'+ProductId+'PriceLet">' + PriceBefore + ' Only</span> </div> </div> <div class="button"> <div class="button-layer"></div> <button onclick="submit(this.id)" id="' + ProductId + '">Remove From Bag</button> </div> </div>';
          console.log(Code);
          Item = document.getElementById('products').innerHTML;
          document.getElementById('products').innerHTML = Item + Code;
        }
      });
    });
  }
  getdata();

  function submit(Element){
    firebase.database().ref('User Cart/'+Element).remove();
    location.reload();
  }