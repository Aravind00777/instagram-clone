import React, { useState } from "react";
import { Button } from "@mui/material";
import { supabase } from "../../assets/js/supabaseClient"; // Import your Supabase client
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload!");
      return;
    }

    const fileName = `${Date.now()}_${image.name}`; // Create a unique file name

    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from("insta_clone") // Replace 'images' with your Supabase bucket name
      .upload(fileName, image);

    if (error) {
      console.error("Supabase Upload Error:", error.message);
      alert("File upload failed.");
      return;
    }

    // Retrieve the public URL for the uploaded file
    const { data: publicURLData } = supabase.storage
      .from("insta_clone")
      .getPublicUrl(fileName);

    if (!publicURLData) {
      console.error("Failed to retrieve public URL.");
      alert("Failed to retrieve file URL.");
      return;
    }

    const publicURL = publicURLData.publicUrl;

    // Add file details to Firebase Firestore
    firebase.firestore().collection("posts").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      caption: caption,
      imageUrl: publicURL,
      username: username,
    });

    // Reset form and progress
    setProgress(0);
    setCaption("");
    setImage(null);
    alert("File uploaded successfully!");
  };

  return (
    <div>
      <progress value={progress} max={100}></progress>
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}
