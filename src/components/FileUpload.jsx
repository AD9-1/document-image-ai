import React from "react";
import {Buffer} from 'buffer';
const FileUpload = ({setFile}) => {
  const handleFileUpload = async(event) => {
    const fileUpload=await event.target.files[0].arrayBuffer();
    const file1={
      type:event.target.files[0].type,
      file:Buffer.from(fileUpload).toString('base64'),
      imageUrl:URL.createObjectURL(event.target.files[0])
    }
    console.log("Uploaded file:", file1);
    setFile(file1);
  }
  return (
    <section className="place-items-center">
      <h2 className="text-2xl mb-3">Get Started</h2>
      <input
        type="file"
        accept=".pdf, .docx,image/*"
        multiple
        onChange={handleFileUpload}
        className="block border border-gray-400 rounded-md p-1 text-sm file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-amber-500 file:text-white hover:file:bg-amber-600"
      />
   
    </section>
  );
};

export default FileUpload;
