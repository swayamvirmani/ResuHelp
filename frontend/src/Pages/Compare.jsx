import React, { useState } from "react";
import "./analyse.css";
import axios from "axios";
import { marked } from "marked";
import { Button, Spinner, useToast } from "@chakra-ui/react";

const Compare = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");
  const toast = useToast();

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFile1(file);
    } else {
      toast({
        title: "Invalid file",
        description: "Please upload a PDF file only",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFile2(file);
    } else {
      toast({
        title: "Invalid file",
        description: "Please upload a PDF file only",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleCompare = async () => {
    if (!file1 || !file2) {
      toast({
        title: "Error",
        description: "Please upload both PDF files",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("files", file1);
    formData.append("files", file2);

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/compare", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data && response.data.analysis) {
        setAnalysis(marked.parse(response.data.analysis));
      } else {
        toast({
          title: "Error",
          description: "No analysis received from the server",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Server Error",
        description: "Failed to compare resumes",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setFile1(null);
    setFile2(null);
    setAnalysis("");
  };

  return (
    <div className="analyse-bg">
      <div className="analyse-container">
        <h1 className="text-3xl font-bold mb-8">Compare 2 Resumes</h1>
        <div className="upload-section">
          <div className="file-input-container" style={{ width: '100%' }}>
            <input
              type="file"
              id="file-input-1"
              style={{ display: 'none' }}
              onChange={handleFileChange1}
              accept="application/pdf"
            />
            <label htmlFor="file-input-1" className="file-input-label" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
              {file1 ? file1.name : 'Choose First PDF File'}
            </label>
            <input
              type="file"
              id="file-input-2"
              style={{ display: 'none' }}
              onChange={handleFileChange2}
              accept="application/pdf"
            />
            <label htmlFor="file-input-2" className="file-input-label" style={{ width: '100%', justifyContent: 'center' }}>
              {file2 ? file2.name : 'Choose Second PDF File'}
            </label>
          </div>
          <div className="mt-4 flex gap-4" style={{ justifyContent: 'center', width: '100%' }}>
            <Button colorScheme="green" onClick={handleCompare} isDisabled={!file1 || !file2} isLoading={loading}>
              Analyse
            </Button>
            <Button colorScheme="red" onClick={clearAll} isDisabled={!file1 && !file2}>
              Clear
            </Button>
          </div>
        </div>
        {/* Display analysis result safely */}
        {analysis && (
          <div id="displayer" className="mt-6" dangerouslySetInnerHTML={{ __html: analysis }} />
        )}
      </div>
    </div>
  );
};

export default Compare;
