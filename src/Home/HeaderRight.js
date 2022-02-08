/* eslint-disable */

import { Link } from "react-router-dom";
import {
  getAuth,
  setPersistence,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  browserLocalPersistence,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { provider } from "../firebase";
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

function HeaderRight() {
  const auth = getAuth();
  const [User, setUser] = useState([]);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    onAuthStateChanged(auth, (user) => setUser(user));
  });

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }, [auth]);

  return (
    <div className="relative h-screen pt-10 md:block hidden">
      <div className="flex w-48 flex-col items-center">
        {User && (
          <Avatar
            src={User.photoURL}
            className="cursor-pointer scale-125 hover:scale-150 "
          />
        )}

        {User ? (
          <button
            className="bg-white text-sm hover:bg-neutral-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center max-w-fit"
            onClick={() => signOut(auth)}
          >
            Log-Out
          </button>
        ) : (
          <button
            className="bg-white text-sm hover:bg-neutral-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center max-w-fit"
            onClick={() => signInWithRedirect(auth, provider)}
          >
            Log-In
          </button>
        )}
      </div>
      {/* bottom-72 -left-9 -rotate-90*/}
      <div className="absolute bottom-[40%] -left-[30%] -rotate-90 flex justify-between ">
        <div className="flex justify-between mr-20">
          <Link to="*" className="rightMenu px-2 mr-6">
            fb
          </Link>
          <Link to="*" className="rightMenu px-2 mr-6">
            tw
          </Link>
          <Link to="*" className="rightMenu px-2 mr-6">
            in
          </Link>
        </div>

        <div className="flex justify-between w-72">
          <Link to="*" className="rightMenu ml-10">
            Manufacturing
          </Link>
          <Link to="*" className="rightMenu">
            packaging
          </Link>
          <Link to="*" className="rightMenu">
            team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;
