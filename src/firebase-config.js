const Rebase = require('re-base')
const firebase = require('firebase')

  const Firebaseconfig = {
    apiKey: "AIzaSyACsP6FIh1Kv6AATdO4OUewW-9Yo6KMMK8",
    authDomain: "xumes-portifolio-92273.firebaseapp.com",
    databaseURL: "https://xumes-portifolio-92273.firebaseio.com",
    projectId: "xumes-portifolio-92273",
    storageBucket: "xumes-portifolio-92273.appspot.com",
    messagingSenderId: "985330673435"
  };

  const app =  firebase.initializeApp(Firebaseconfig);
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config