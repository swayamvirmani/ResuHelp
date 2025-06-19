import React, { useState } from 'react';
import './analyse.css';
import axios from 'axios';
import { marked } from 'marked';
import { Button, useToast } from '@chakra-ui/react';

const AnalyseUpload = () => {
  const [fileSelected, setFileSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [analysisResponse, setAnalysisResponse] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileSelected(true);
      setAnalysisResponse(null);
    }
  };

  const uploadAndAnalyse = async () => {
    if (!file) {
      toast({
        title: 'Error',
        description: 'Please select a file first',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/analyse', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data && res.data.analysis) {
        setAnalysisResponse(res.data);
        toast({
          title: 'Success',
          description: 'Resume analyzed successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error('No analysis data received');
      }
    } catch (error) {
      console.error('Error analyzing resume:', error);
      toast({
        title: 'Error',
        description: 'Failed to analyze resume',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setFile(null);
    setFileSelected(false);
    setAnalysisResponse(null);
  };

  return (
    <div className="analyse-container">
      <h1 className="text-3xl font-bold mb-8">Resume Analysis</h1>

      <div className="upload-section">
        <div className="file-input-container">
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            accept=".pdf"
          />
          <label
            htmlFor="file-input"
            className={`file-input-label ${fileSelected ? 'selected' : ''}`}
          >
            {fileSelected ? file.name : 'Choose PDF File'}
          </label>
        </div>

        <div className="mt-4 flex gap-4">
          <Button
            colorScheme="blue"
            onClick={uploadAndAnalyse}
            isDisabled={!fileSelected}
            isLoading={loading}
          >
            Upload & Analyse
          </Button>

          <Button
            colorScheme="red"
            onClick={clear}
            isDisabled={!fileSelected}
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Display analysis result safely */}
      {analysisResponse?.analysis && (
        <div
          id="displayer"
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: marked(analysisResponse.analysis),
          }}
        />
      )}
    </div>
  );
};

export default AnalyseUpload;
