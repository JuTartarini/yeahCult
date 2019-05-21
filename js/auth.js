$(document).ready(function () {
  $('#btn-create-user').click(function () {
    event.preventDefault();
    const signupEmail = $('#signup-email').val();
    const signupPassword = $('#signup-password').val();
    // const userName = $('#input-name').val();

    firebase
      .auth()
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          // displayName: userName,
          photoURL: '',
        })
          .then(() => window.location.href = "html/map.html");
      })
      .catch(error => $('#error-msg').text(error.message));
  });

  $('#btn-login').click(function () {
    event.preventDefault();
    const email = $('#input-email').val();
    const password = $('#input-password').val();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => window.location.href = "html/map.html")
      .catch(error => $('#error-msg').text(error.message));
  });

  $('#google-btn').click(function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => window.location.href = "html/map.html")
      .catch(error => $('#error-msg').text(error.message));
  });

  $('#logout-btn').click(function () {
    firebase
      .auth()
      .signOut()
      .then(() => window.location.href = "index.html");
  });
});
