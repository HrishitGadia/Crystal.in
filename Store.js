
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

function work() {
  firebase.database().ref('Product Information/').push({
    Stars: 5,
    Name: 'Adidas Shoes',
    PriceBefore: '$15',
    PriceAfter: '$9',
    Description: '',
    Availablity: 'Yes',
    Image01: 'https://i.postimg.cc/Kjwy7Kc9/Shoe-7.png',
    Image02: 'https://i.postimg.cc/QMVN7W3T/Shoe-8.png',
    Color01: 'Cyan',
    Color02: 'Dark Blue'
  });
}

//work()


//Variables
var Changer;
function getdata() {
  firebase.database().ref("/" + 'Product Information').on('value', function (snapshot) {
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
        Code = '<div class="product-card"> <div class="logo-cart"> <img src="logo.jpg" alt="logo"> </div> <div class="main-images"> <img id="blue" class="blue active" src="' + Image01 + '" alt="blue"> <img id="pink" class="pink" src="' + Image02 + '" alt="pink"> <img id="yellow" class="yellow" src="' + Image03 + '" alt="yellow"> </div> <br> <div class="shoe-details"> <span class="shoe_name">' + Name + '</span> <p>' + Description + '</p> <div class="stars"> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bx-star"></i> </div> </div> <div class="color-price"> <div class="color-option"> <span class="color">Colour:</span> <div class="circles"> <span class="circle ' + Color01 + ' active" id="blue"></span> <span class="circle ' + Color02 + '" id="pink"></span> <span class="circle ' + Color03 + ' " id="yellow"></span> </div> </div> <div class="price"> <span class="price_num">' + PriceAfter + '</span> <span class="price_letter">' + PriceBefore + ' Only</span> </div> </div> <div class="button"> <div class="button-layer"></div> <button onclick="submit(this.id)" id="' + ProductId + '">Add To Bag</button> </div> </div>';
        console.log(Code);
        Item = document.getElementById('products').innerHTML;
        document.getElementById('products').innerHTML = Item + Code;
      }
    });
  });
}
getdata();

let circle = document.querySelector(".color-option");

circle.addEventListener("click", (e)=>{
  let target = e.target;
  if(target.classList.contains("circle")){
    circle.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    document.querySelector(".main-images .active").classList.remove("active");
    document.querySelector(`.main-images .${target.id}`).classList.add("active");
  }
});


function submit(Element) {

}