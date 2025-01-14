"use client";

import { useState, useRef } from "react";
import QuestionMarkIcon from "./components/icons/questionMarkIcon";
import Button from "./components/atoms/Button";
import FileRightIcon from "./components/icons/fileRightIcon";
import { postCSVData } from "./api/api";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "text/csv") {
        setSelectedFile(file);
      } else {
        alert("Please select a valid CSV file.");
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const handleNext = () => {
    if (selectedFile) {
      console.log("File uploaded:", selectedFile.name);
      const formData = new FormData();
      formData.append('file', selectedFile);
      postCSVData(formData);
    } else {
      alert("Please upload a file before proceeding.");
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between p-8 py-4 border-b-[1px] border-gray-200">
        <h1 className="text-2xl font-bold tracking-tight">
          My Fitness Pal to Grafana
        </h1>
        <div className="p-2 bg-gray-200 rounded-lg">
          <QuestionMarkIcon className="font-bold" />
        </div>
      </nav>
      <main className="flex flex-col mt-32 items-center w-full text-center">
        <div className="flex flex-col gap-5 lg:max-w-2xl w-full">
          <h1 className="text-2xl font-bold">Upload your Data</h1>
          <p className="font-medium">
            You can upload your fitness data from MyFitnessPal and visualize it
            in Grafana. This can help you better understand your data and
            fitness goals.
          </p>
          <div
            className={`flex flex-col py-20 border-dashed rounded-lg border-4 min-h-72 ${
              dragActive ? "border-blue-400 bg-gray-100" : "border-gray-400"
            } w-full items-center justify-center`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <>
                <FileRightIcon height={100} width={100}/>
                <p className="text-lg font-bold">{selectedFile.name}</p>
              </>
            ) : (
              <>
                <p className="text-lg font-bold">Drag and Drop or</p>
                <p>select a CSV file from your computer.</p>
                <label htmlFor="fileInput">
                  <input
                    type="file"
                    accept=".csv"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                  <Button onClick={() => fileInputRef.current?.click()}>
                    Browse Files
                  </Button>
                </label>
              </>
            )}
          </div>
          <div className="w-full flex justify-end">
            <Button
              className="bg-sky-500 hover:bg-sky-300 hover:text-gray-100 text-white"
              onClick={handleNext}
              disabled={!selectedFile}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
