
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

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  // Convert key-value pairs to JSON
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  Address = data.ip;
  localStorage.setItem('IP',Address)
});
//Variables
var Changer;
var TStars = ' <i class="bx bxs-star"></i>';
var Id = localStorage.getItem('UserId');
if(Id == 'null'){
  
  Id = "IP's/"+localStorage.getItem('IP');
  localStorage.setItem('UserId',Id);

}
var Categories = ['apple'];
var Categories2 = ['a'];
async function getdata2() {
  Categories = [];
  firebase.database().ref(`/Products/`).on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      ProductId = childKey;
      ProductData = childData;
      Categories.push(ProductId);
      localStorage.setItem('Types', JSON.stringify(Categories));
      window.Categories2 = Categories;
    })

  });
  console.log(Categories2)
  return Categories2;
}
function getdata() {
  getdata2().then(
    function (value) {
      Sett = []
      Sett = JSON.parse(localStorage.getItem('Types'));
      console.log(Sett);
      for (i = 0; i < Sett.length; i++) {
        Item = document.getElementById('products').innerHTML;
        localStorage.setItem('CurrentItem', Sett[i]);
        console.log(Sett[i])
        document.getElementById('products').innerHTML = Item + '<div id="' + Sett[i] + '"><br><h1>' + Sett[i] + '</h1><div>'
        firebase.database().ref(`/Products/` + Sett[i]).on('value', function (snapshot) {
          snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "Catagories") {
              Fett = localStorage.getItem('CurrentItem')
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
              Category = ProductData['Category'];
              Short = Description.substring(0, 250);
              Short = Short + '.......'
              Program = ' <div class="container" id="' + ProductId + 'ShowAbout"><button class="noner" id="' + ProductId + 'ShowA" onclick = "Close(this.id)"><i class="bi bi-x-lg"></i></button><div class="box one"> <div class="details"> <div class="topic">Description</div> <p>' + Description + '</p> <div class="rating">' + TStars.repeat(Stars) + '</div> <div class="price-box"> <div class="price">' + PriceAfter + '</div> </div> </div> <div class="button1"> <button onclick="submit(this.id)" id="' + ProductId + '">Add To Bag</button> </div> </div> <div class="box two"> <div class="image-box"> <div class="image"> <img src="' + Image01 + '" alt=""> </div> <div class="info"> <div class="name">' + Name + '</div> <div class="shipping">FREE SHIPPING</div> </div> </div> </div> </div>'
              Item = document.getElementById('hoverer').innerHTML;
              document.getElementById('hoverer').innerHTML = Item + Program;
              Code = '<div class="product-card"> <div class="logo-cart"> <button class="noner" id="' + ProductId + 'Show" onclick = "View(this.id)"><i class="bi bi-bag"></i> View Product</button></div> <br><br><br><div class="main-images"> <img id="' + ProductId + 'img1" class="blue active xyz class123" src="' + Image01 + '" alt="blue"> <img id="' + ProductId + 'img2" class="pink xyz class123"" src="' + Image02 + '" alt="pink"> <img id="' + ProductId + 'img3" class="yellow xyz class123" src="' + Image03 + '" alt="yellow"></div> <br> <br><br><div class="shoe-details"> <span class="shoe_name" id="' + ProductId + 'Name">' + Name + '</span> <p id="' + ProductId + 'Des">' + Short + '</p> <div class="stars">' + TStars.repeat(Stars) + ' </div> </div> <div class="color-price"> <div class="color-option"> <span class="color">Colour:</span> <div class="circles"> <span class=" circle ' + Color01 + ' active" id="' + ProductId + 'C1" onclick="ChangeActive(this.id)"></span> <span class="circle ' + Color02 + '" id="' + ProductId + 'C2" onclick="ChangeActive(this.id)"></span> <span class="circle ' + Color03 + ' " id="' + ProductId + 'C3" onclick="ChangeActive(this.id)"></span></div> </div> <div class="price"> <span class="price_num" id="' + ProductId + 'PriceNum">' + PriceAfter + '</span> <span class="price_letter" id="' + ProductId + 'PriceLet">' + PriceBefore + ' Only</span> </div> </div> <div class="button"> <div class="button-layer"></div> <button class="btnbtn" onclick="submit(this.id)" id="' + ProductId + '">Add To Bag</button> </div> </div>';
              Fett = localStorage.getItem('CurrentItem')
              Item = document.getElementById(Category).innerHTML;
              document.getElementById(Category).innerHTML = Item + Code;
              console.log(Fett)
            }
          });
        });
      }
      if (Id != "null") {
        document.getElementById("bag").href = "Bag.html";
      }
    },
    function (error) { console.log(error); }
  );
}

getdata()
function submit(Element) {
  if (Id=="null") {
    window.alert('error')
  }
  else {
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

    firebase.database().ref('users/' + Id + '/User Cart').push({
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

function View(Element) {
  UserItem = Element + 'About';
  document.getElementById('products').style.display = "none";
  document.getElementById(UserItem).classList.add("show");

}

function Close(Element) {
  UserItem = Element + 'bout';
  document.getElementById('products').style.display = "block";
  document.getElementById(UserItem).classList.remove("show");

}
function Logout(){
  firebase.auth().signOut().then(() => {
    window.alert('User Signed Out');
    localStorage.setItem('UserId',"null");
    localStorage.setItem('status',"Logged Out");
    document.getElementById('out').style.display = 'none';
    document.getElementById('in').style.display = 'block';
  }).catch((error) => {
    window.alert(error);
  });
}
Id = localStorage.getItem('UserId');
Ans = Id.startsWith("IP's/");
console.log(Ans)
if(Ans == true){
  document.getElementById('out').style.display = 'none';
}
else{
  document.getElementById('in').style.display = 'none';
}