import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Brief = ({ file }) => {
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("idle");
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  useEffect(() => {
    setStatus("Generating summary...");

    async function loadModule() {
      try {
        const result = await model.generateContent([
          {
            inlineData: {
              data: file.file,
              mimeType: "application/pdf",
            },
          },
          "Summarize this document",
        ]);
        console.log(result.response.text());
        setStatus("Summary generated");
        setSummary(result.response.text());
      } catch (error) {
        console.error("Error generating summary:", error);
        setStatus("Error generating summary");
      }
    }
    if (status === "idle") loadModule();
  }, [file]);

  return (
    <div className="place-items-center py-5">
      {status === "idle" ? (
        <p>Reviewing uploaded files...</p>
      ) : (
        <div className=" px-6">
          <h2 className="text-2xl m-auto w-fit py-3">Document Summary</h2>
          {status === "Generating summary..." ? (
            <Loader className="m-auto w-fit" />
          ) : status === "Summary generated" ? (
            <p className="text-lg">{summary}</p>
          ) : (
            <p className="text-lg">Error in generating Summary</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Brief;
