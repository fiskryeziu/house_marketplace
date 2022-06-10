import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import gooogleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick = async (e) => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: Timestamp.fromDate(new Date()),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("could not authorize with google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "sign-up" ? "up" : "in"}</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img src={gooogleIcon} alt="google" className="socialIconImg" />
      </button>
    </div>
  );
}

export default OAuth;
