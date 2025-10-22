import { useState } from "react";
import Brief from "./components/Brief";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  return (
    <>
      <div className=" ">
        <Header />
        <hr className="bg-amber-950" />
        {uploadedFile ? <Brief file={uploadedFile} /> : <FileUpload setFile={setUploadedFile}/>}
      </div>
    </>
  );
}

export default App;
