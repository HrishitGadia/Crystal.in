
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
        Code = '<div class="product-card"> <div class="logo-cart"> <img src="logo.jpg" alt="logo"> </div> <div class="main-images"> <img id="' + ProductId + 'img1" class="blue active xyz class123" src="' + Image01 + '" alt="blue"> <img id="' + ProductId + 'img2" class="pink xyz class123"" src="' + Image02 + '" alt="pink"> <img id="' + ProductId + 'img3" class="yellow xyz class123" src="' + Image03 + '" alt="yellow"> </div> <br> <div class="shoe-details"> <span class="shoe_name" id="' + ProductId + 'Name">' + Name + '</span> <p id="' + ProductId + 'Des">' + Description + '</p> <div class="stars"> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bxs-star"></i> <i class="bx bx-star"></i> </div> </div> <div class="color-price"> <div class="color-option"> <span class="color">Colour:</span> <div class="circles"> <span class=" circle ' + Color01 + ' active" id="' + ProductId + 'C1" onclick="ChangeActive(this.id)"></span> <span class="circle ' + Color02 + '" id="' + ProductId + 'C2" onclick="ChangeActive(this.id)"></span> <span class="circle ' + Color03 + ' " id="' + ProductId + 'C3" onclick="ChangeActive(this.id)"></span> </div> </div> <div class="price"> <span class="price_num" id="' + ProductId + 'PriceNum">' + PriceAfter + '</span> <span class="price_letter" id="' + ProductId + 'PriceLet">' + PriceBefore + ' Only</span> </div> </div> <div class="button"> <div class="button-layer"></div> <button onclick="submit(this.id)" id="' + ProductId + '">Add To Bag</button> </div> </div>';
        Item = document.getElementById('products').innerHTML;
        document.getElementById('products').innerHTML = Item + Code;
        console.log(Code)
      }
    });
  });
}
getdata();
/*
document.querySelectorAll('.color-option').forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.target;
     if(target.classList.contains("circle")){
       document.querySelector(".active").classList.remove("active");
       target.classList.add("active");
       document.querySelector(".main-images .active").classList.remove("active");
       document.querySelector(`.main-images .${target.id}`).classList.add("active");
     }
  })
})*/


function submit(Element) {
  UserId = Element;
  console.info(UserId)
  Img1Src = document.getElementById(UserId + 'img1').src;
  Img2Src = document.getElementById(UserId + 'img2').src;
  Img3Src = document.getElementById(UserId + 'img3').src;
  PName = document.getElementById(UserId + "Name").innerHTML;
  PDes = document.getElementById(UserId + "Des").innerHTML;
  PNum = document.getElementById(UserId + "PriceNum").innerHTML;
  PLet = document.getElementById(UserId + "PriceLet").innerHTML;
  C1 = document.getElementById(UserId + "C1").classList[1];
  C2 = document.getElementById(UserId + "C2").classList[1];
  C3 = document.getElementById(UserId + "C3").classList[1];

  firebase.database().ref('User Cart/' + UserId).set({
    Stars: 5,
    Name: PName,
    PriceBefore: PLet,
    PriceAfter: PNum,
    Description: PDes,
    Availablity: 'Yes',
    Image01: Img1Src,
    Image02: Img2Src,
    Image03: Img3Src,
    Color01: C1,
    Color02: C2,
    Color03: C3
  });
  window.location = 'Bag.html';
}

function ChangeActive(Object) {
  Human = Object;
  Book = Human.slice(0, - 2);
  Page = Human.slice(- 2);
  if (Page == "C1") {
    Chair = Book + 'img1';
    Word = Book + 'img2';
    table = Book + 'img3';
    Color1 = Book + 'C1';
    Color2 = Book + 'C2';
    Color3 = Book + 'C3';
    document.getElementById(Word).classList.remove("active");
    document.getElementById(Chair).classList.add("active");
    document.getElementById(table).classList.remove("active");
    document.getElementById(Color1).classList.add("active");
    document.getElementById(Color2).classList.remove("active");
    document.getElementById(Color3).classList.remove("active");
  }
  else if (Page == "C2") {
    Chair = Book + 'img1';
    Word = Book + 'img2';
    table = Book + 'img3';
    Color1 = Book + 'C1';
    Color2 = Book + 'C2';
    Color3 = Book + 'C3';
    document.getElementById(Word).classList.add("active");
    document.getElementById(Chair).classList.remove("active");
    document.getElementById(table).classList.remove("active");
    document.getElementById(Color1).classList.remove("active");
    document.getElementById(Color2).classList.add("active");
    document.getElementById(Color3).classList.remove("active");
  }
  else if (Page == "C3") {
    Chair = Book + 'img1';
    Word = Book + 'img2';
    table = Book + 'img3';
    Color1 = Book + 'C1';
    Color2 = Book + 'C2';
    Color3 = Book + 'C3';
    document.getElementById(Word).classList.remove("active");
    document.getElementById(Chair).classList.remove("active");
    document.getElementById(table).classList.add("active");
    document.getElementById(Color1).classList.remove("active");
    document.getElementById(Color2).classList.remove("active");
    document.getElementById(Color3).classList.add("active");
  }
}