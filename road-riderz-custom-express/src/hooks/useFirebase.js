import { useEffect, useState } from "react";
import { firebaseInitialize } from "../firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";


firebaseInitialize();
const provider = new GoogleAuthProvider();
const auth = getAuth();


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [admin,setAdmin]=useState(false)

  


  const googleSignIn = (history,location) => {
    // setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
 const user =result.user
        //SAVE USER FUNCTION CALL
        saveUser(user.email,user.displayName,"put")

        setError("")
        history.push(location?.state?.from || "/dashboard")
      })
      .catch((error) => {
        // const errorMessage = error.message;
        setError(error.message)
      })
      // .finally(() => setIsLoading(false));
  };

  //current user is by setting an observer on the Auth object

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
        setError("")
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  //user registration
  const registerUser = (email, password, name,history) => {
    console.log(name);
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("")
        // Signed in
        // setUser(result.user);
        console.log(result.user);
        

        //save use to database
        saveUser(email,name,"post")


        updateProfile(auth.currentUser, {
          displayName: name
        }).then((result) => {
          // Profile updated!
         setUser(result.user) 

        }).catch((error) => {
          // An error occurred
          // ...
        })
        history.push("/")
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(false)
       
      });
  };

  //user login with email and password
  const visitorLogIn = (email, password,history,location) => {
    const uri = location?.state?.from
    // setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("")
        history.push(uri||"/dashboard")
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      // .finally(() => setIsLoading(false));
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //check admin
useEffect(()=>{
  // setIsLoading(true)
  fetch(`https://polar-thicket-32932.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>{
    setAdmin(data.admin)
    // setIsLoading(false) 
})

},[user.email])

  const saveUser=(email,displayName,method)=>{

    const user ={email,displayName}
    fetch("https://polar-thicket-32932.herokuapp.com/users",
    {method:method,
  headers:{"content-type":"application/json"},
  body: JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>console.log(data))

  }

  return {
    admin,
    googleSignIn,
    user,
    logout,
    visitorLogIn,
    isLoading,
    error,
    registerUser,
  };
};

export { useFirebase };


//---------Thanks to you fo your time and support------------------- 