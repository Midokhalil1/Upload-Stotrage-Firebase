
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, StorageReference, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp_CDnSOn66T7sw_6lSw7sj23wrU9UBd4",
  authDomain: "upload-storage-mk.firebaseapp.com",
  projectId: "upload-storage-mk",
  storageBucket: "upload-storage-mk.appspot.com",
  messagingSenderId: "529769500777",
  appId: "1:529769500777:web:ca9c96136c9f5cb21892f8"
};

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState({ name: '' });
    console.log({selectedFile});
    const handleUpload = (e: React.FormEvent<HTMLElement>) =>{
        e.preventDefault();
        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);
        const filename: string = selectedFile?.name
        const imageRef: StorageReference = ref(storage, 'photos/' + filename);

        const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-mk.appspot.com/o/2022.10.31-BocaCode-23.jpg${filename}}?alt=media`
        // uploadBytes(imageRef, selectedFile);
    }


    return (
        <form onSubmit={handleUpload}>
        <input type="file" name="photo" 
        onChange={(e: React.FormEvent<HTMLInputElement> | any) => setSelectedFile(e.target.files[0]) }
            />
        <button type="submit">Upload</button>
        </form>
    )
}
