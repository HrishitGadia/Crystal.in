var Status;

function Check() {
   Status = localStorage.getItem('status');
   if(Status == "Logged In"){
    document.getElementById("status").innerHTML = "<span class='glyphicon glyphicon-log-in'></span> Logout";
   }
   else if(Status == "Logged Out"){
    document.getElementById("status").innerHTML = "<span class='glyphicon glyphicon-log-in'></span> Sign Up";
   }
   console.info('Function Called');
   console.info(Status);
}