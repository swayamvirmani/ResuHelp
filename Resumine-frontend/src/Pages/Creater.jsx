// import React, { useState } from "react";
// import "./analyse.css";
// import axios from "axios";
// import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
// import { Button, Spinner, useToast } from "@chakra-ui/react";

// const Compare = () => {
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [img1, setImage1] = useState(null);
//   const [img2, setImage2] = useState(null);
//   const [uploaded1, setUpload1] = useState(false);
//   const [uploaded2, setUpload2] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const toast = useToast();

//   const clear = () => {
//     document.getElementById("displayer").innerHTML = "";
//     setLoading(false);
//   };

//   const uploadToCloudinary = async (file, setImage, setUploaded) => {
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "resume_upload");
//     data.append("cloud_name", "duu6k0oso");

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/duu6k0oso/image/upload", {
//         method: "POST",
//         body: data,
//       });

//       if (res.ok) {
//         const jsonResponse = await res.json();
//         const imageUrl = jsonResponse.secure_url;
//         setImage(imageUrl);
//         toast({
//           title: "Image Uploaded.",
//           description: "Your image has been successfully uploaded.",
//           status: "success",
//           duration: 2000,
//           isClosable: true,
//         });
//         setUploaded(true);
//       } else {
//         console.error("Upload error:", res.statusText);
//       }
//     } catch (err) {
//       console.error("Upload failed:", err);
//     }
//   };

//   const resp = async (e) => {
//     e.preventDefault();
//     setLoader(true);
//     setLoading(false);

//     try {
//       const res = await axios.post("https://resumine-backend.vercel.app/api/compare", {
//         img1,
//         img2,
//       });

//       document.getElementById("displayer").innerHTML = marked.parse(res.data);
//       setLoading(true);
//     } catch (err) {
//       console.error("Analysis error:", err);
//       toast({
//         title: "Error",
//         description: "Analysis failed. Try again later.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     } finally {
//       setLoader(false);
//     }
//   };

//   return (
//     <div className="flex bg-gradient-to-bl from-[#7acef7] to-[#06507e] lg:flex-row flex-col">
//       <div className="lg:w-[40%] h-screen ml-10">
//         <div className="mt-36 lg:ml-20">
//           <h1 className="text-[40px] font-bold text-white">Compare 2 Resumes</h1>
//           <p className="text-white">(Upload only .jpg, .jpeg or .png)</p>
//         </div>

//         <div className="mt-4 lg:ml-20 flex flex-col gap-4">
//           <div className="flex flex-col w-[45%] gap-2">
//             <input type="file" onChange={(e) => setFile1(e.target.files[0])} />
//             <Button onClick={() => uploadToCloudinary(file1, setImage1, setUpload1)} colorScheme="blue">
//               Upload 1
//             </Button>
//           </div>

//           <div className="flex flex-col w-[45%] gap-2">
//             <input type="file" onChange={(e) => setFile2(e.target.files[0])} />
//             <Button onClick={() => uploadToCloudinary(file2, setImage2, setUpload2)} colorScheme="blue">
//               Upload 2
//             </Button>
//           </div>

//           {uploaded1 && uploaded2 && (
//             <div className="flex gap-2 mt-4">
//               <Button onClick={resp} colorScheme="green">Analyse</Button>
//               <Button onClick={clear} colorScheme="red">Clear</Button>
//             </div>
//           )}

//           {loader && (
//             <Spinner
//               thickness="4px"
//               speed="0.65s"
//               emptyColor="gray.200"
//               color="blue.400"
//               size="xl"
//               mt={4}
//             />
//           )}
//         </div>
//       </div>

//       <div className="lg:w-1/2 h-screen w-[90%]">
//         {loading && (
//           <div className="m-5 w-full mt-24 h-[80%] rounded-lg border-white p-5 bg-white overflow-auto" id="displayer"></div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Compare;
