
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzplAj9UmODrkBUnZX6c04M5WOwFvA5_U",
    authDomain: "projetgmc-f92a6.firebaseapp.com",
    databaseURL: "https://projetgmc-f92a6.firebaseio.com",
    projectId: "projetgmc-f92a6",
    storageBucket: "projetgmc-f92a6.appspot.com",
    messagingSenderId: "742231004718",
    appId: "1:742231004718:web:d60b95ddd24999089a71bf",
    measurementId: "G-WE9F6121S5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  var messagesRef = firebase.database().ref('projetgmc');
 
  function submitForm(e) {
      e.preventDefault();
      
      var alb = document.getElementById('album').value;
      var art = document.getElementById('artist').value;
      var ar = document.getElementById('area').value;
      var url = document.getElementById('url').value;
      
      saveMessage(alb, art,ar,url);
  
  
  }
  document.getElementById('form0').addEventListener('submit', submitForm);

function saveMessage(alb, art, ar,url) {

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        alb:alb,
        art: art,
        ar: ar,
        url: url,
       
    });

}
    
