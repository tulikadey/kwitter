
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCC3FEDK2PpwqrThbBRWCAZ_4t9sYlpOkg",
  authDomain: "kwitter-9059e.firebaseapp.com",
  databaseURL: "https://kwitter-9059e.firebaseio.com",
  projectId: "kwitter-9059e",
  storageBucket: "kwitter-9059e.appspot.com",
  messagingSenderId: "175426331075",
  appId: "1:175426331075:web:4a9e53be7aa552748add76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML 
= "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       row="<div class='room_name' id='"+Room_names+"' onclick='redirectroomname(this.id)' > #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomname");
  window.location="index.html";
}

var user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML=" Welcome " + user_name+"!";

function addroom(){
  var roomname=document.getElementById("roomname").value;
  firebase.database().ref("/").child(roomname).update({
    purpose:"adding roomname"
  });
  localStorage.setItem("roomname",roomname);
  window.location="kwitter_page.html";
  
}

function redirectroomname(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location="kwitter_page.html";
}

