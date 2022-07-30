
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