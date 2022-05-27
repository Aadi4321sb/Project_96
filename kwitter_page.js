//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBQ7EbojjhcfDMbg1LV2g-5qhm7oKGHD6k",
      authDomain: "lets-chat-app-6321c.firebaseapp.com",
      databaseURL: "https://lets-chat-app-6321c-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-6321c",
      storageBucket: "lets-chat-app-6321c.appspot.com",
      messagingSenderId: "139323356325",
      appId: "1:139323356325:web:b4b69b2aace8ca8065094c"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = ""
}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
