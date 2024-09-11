import { Button } from "@mui/material";

export default function ImageUpload(){
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const handleChange =(e) =>{
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        const data = new FormData();
    }

    return <div>
        <input type="text" placeholder="Enter a caption....." onChange={event => setCaption(event.target.value)} />
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>Upload</Button>
    </div>
}