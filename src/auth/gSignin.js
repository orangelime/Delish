import gauth from '@/auth/gauth'
//var auth2; // The Sign-In object.
//var googleUser; // The current user.

gapi.load('auth2', () => {
    gapi.auth2.init({
        client_id: gauth.clientId,
        //scope: "profile email" // this isn't required
    }).then((auth2) => {
        
        if (!auth2.isSignedIn.get()) { // check if already signed in
            auth2.signIn()
          }
          //console.log( "signed in: " + auth2.isSignedIn.get() );  
        //auth2.isSignedIn.listen(gSignInSuccess);
        //var button = document.querySelector('#signInButton');
        /*button.addEventListener('click', function() {
          auth2.signIn();
        });*/
    });
});

export default{
    
    gSignInSuccess () {
        let auth2 = gapi.auth2.getAuthInstance();
        
        if (auth2.isSignedIn.get()) {
            var profile = auth2.currentUser.get().getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }
        document.getElementById('signintext').src = profile.getImageUrl();
        
        document.getElementById('signintext').style.display = 'block';
        //this.$store.dispatch('setGoogleUser');

            //
        
        /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());*/

        
        //document.getElementById('signintext').src = profile.getImageUrl();
        //document.getElementById('signintext').style.display = 'block';
       //this.$router.push('/');
        //var id_token = googleUser.getAuthResponse().access_token;
        //console.log("ID Token: " + id_token);
        //console.log(googleUser.isSignedIn())
        
    },
    gImg(){
        /*if (auth2.isSignedIn.get()) {
            var profile = auth2.currentUser.get().getBasicProfile();
            document.getElementById('signintext').src = profile.getImageUrl();
            document.getElementById('signintext').style.display = 'block';
        }*/
        
    },
    gSignInError (error) {
        console.log('OH NOES', error);
    },
    gSignOut(){
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            document.getElementById('signintext').style.display = 'none';
            console.log('User signed out.');
            //location.reload();
        });
        
    }
}