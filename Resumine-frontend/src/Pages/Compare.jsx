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
    <div className="flex bg-gradient-to-bl from-[#7acef7] to-[#06507e] flex-col lg:flex-row">
      <div className="lg:w-[40%] h-screen ml-10">
        <div className="mt-36 lg:ml-20">
          <h1 className="text-[40px] font-bold text-white">Compare 2 Resumes</h1>
          <p className="text-white">(Upload only PDF files)</p>
        </div>
        <div className="mt-6 lg:ml-20 flex flex-col gap-4 w-[70%]">
          <input type="file" accept="application/pdf" onChange={handleFileChange1} />
          <input type="file" accept="application/pdf" onChange={handleFileChange2} />

          <div className="flex gap-4">
            <Button colorScheme="green" onClick={handleCompare}>Analyse</Button>
            <Button colorScheme="red" onClick={clearAll}>Clear</Button>
          </div>
          {loading && <Spinner size="xl" color="blue.400" />}
        </div>
      </div>

      <div className="lg:w-1/2 h-screen w-[90%] overflow-auto mt-24 bg-white p-5 rounded-lg" style={{ display: analysis ? 'block' : 'none' }}>
        <div id="displayer" dangerouslySetInnerHTML={{ __html: analysis }}></div>
      </div>
    </div>
  );
};

export default Compare;
