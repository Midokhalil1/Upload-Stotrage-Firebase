import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, StorageReference, uploadBytes } from "firebase/storage";
import { type } from "os";


const firebaseConfig = {
  apiKey: "AIzaSyBp_CDnSOn66T7sw_6lSw7sj23wrU9UBd4",
  authDomain: "upload-storage-mk.firebaseapp.com",
  projectId: "upload-storage-mk",
  storageBucket: "upload-storage-mk.appspot.com",
  messagingSenderId: "529769500777",
  appId: "1:529769500777:web:ca9c96136c9f5cb21892f8"
};

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [selectedUser, setSelectedUser] = useState<string | undefined>();
  console.log({selectedFile});
  const handleUpload = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if(!selectedFile) {
      alert("Please select a file first!")
      return
    }
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to our storage bucket
    const storage = getStorage(app);
    // create a reference to our file in storage
    const filename = selectedFile?.name;
    const imageRef: StorageReference = ref(storage, 'photos/' + filename);
    // (Todd's quick cheat) create the url from reference
    const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-mk.appspot.com/o/${filename}?alt=media`
    // upload file to bucket
    uploadBytes(imageRef, selectedFile)
    // add an await or .then and then update our database with url
    .then(fileInfo => {
      console.log(fileInfo);


      fetch(process.env.REACT_APP_ENDPOINT+'/users')
      .then(res => res.json())
      .then(data => {
      
      // to do send this form info to the backend API

    })
  })
  }
  return (

    <form onSubmit={handleUpload}>
      <input type="file" name="photo" 
        onChange={(e: React.FormEvent<HTMLInputElement> | any) => setSelectedFile(e.currentTarget.files[0])}
        // value={selectedFile.name}
        /> <br/>
        <input type="text" name="user" id="user" placeholder="user ❤️"
        onChange={(e: React.FormEvent<HTMLInputElement> | any) => setSelectedUser(e.value)}
        />
        <br/>
        

      <button type="submit">Upload</button>
    </form>
  )
}