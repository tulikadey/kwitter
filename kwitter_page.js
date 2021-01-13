//YOUR FIREBASE LINKS
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

    var username=localStorage.getItem("user_name");
    var roomname=localStorage.getItem("roomname");




function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

     row = name_with_tag + message_with_tag +like_button + span_with_tag;       
     document.getElementById("output").innerHTML += row; // points=points+1; points += 1;
//End code
   } });  }); }

getData();


 

 function send(){
      var message= document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      });
        document.getElementById("message").value=" ";
 }


 function updateLike(message_id){
  likes=document.getElementById(message_id).value;
  updatelike=Number(likes)+1;
console.log(message_id);
console.log(updatelike);
  firebase.database().ref(roomname).child(message_id).update({
        like:updatelike
  });
 }
 function logout(){
       window.location="kwitter_room.html";
 }