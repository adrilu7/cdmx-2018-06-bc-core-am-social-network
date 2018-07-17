const registrar=() =>{
    //console.log('diste un click');
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value;
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(fuction(){
        check()
    })
    
    catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        
        
      });
    
}

const ingreso = () =>{
    let email2 = document.getElementById('email2').value;
    let contrasena2 = document.getElementById('contrasena2').value;
    firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        
        
      });
      
}
const observador = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('Holi');
            aparece();
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          //console.log('no existe usuario activo');
          
        }
      });      
}
observador();
const aparece =() =>{
    let contenido = document.getElementById('contenido2');
    contenido.innerHTML = "Solo lo ve usuario activo";
//<a href="app.html">
}; 