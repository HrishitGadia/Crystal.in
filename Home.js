var Status;

function Check() {
   Status = localStorage.getItem('status');
   if(Status == "Logged In"){
    document.getElementById("status").innerHTML = "<span class='glyphicon glyphicon-log-in'></span> Logout";
   }
   else if(Status == "Logged Out"){
    document.getElementById("status").innerHTML = "<span class='glyphicon glyphicon-log-in'></span> Sign Up";
   }
}
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