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

  var messagesRefs = firebase.database().ref('projetgmc');

  function getJson() {
    messagesRefs.on('value', gotData, errData);
}

function gotData(data) {
    var projetgmc = data.val();
    var keys = Object.keys(projetgmc);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var alb = projetgmc[k].alb;
        var art = projetgmc[k].art;
        var ar = projetgmc[k].ar;
        var url = projetgmc[k].url;
        
        var e = document.createElement("div");
        e.innerHTML =
            '<div class="blog-post">'
            + '<img src="'+url+'" alt="" width=750 height=400>'
            + '<div class="col-lg-7 col-12 rec-details ">'
            + '<h2 class="blog-title">'+art+'</h2>'
            + '<h3 class="blog-title">'+alb+'</h3>'
            + '<p>'+ar+'</p>';
            
            

        document.getElementById("posts").appendChild(e);
    }
}
function errData(err) {
    console.log(err);
}

getJson();