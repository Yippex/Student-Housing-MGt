import React, { useState } from "react";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFile);
  };

  return (
    <form className="bg-zinc-100 p-6 rounded-lg shadow-lg " onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="file">
          Select a file
        </label>
        <input
          type="file"
          id="file"
          className="border border-gray-400 p-2 rounded-lg"
          onChange={handleFileChange}
        />
        <div className="pt-3">
          <label htmlFor="" className="block font-medium">
            Name of Lodge
          </label>
          <input
            type="text"
            name=""
            id=""
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="pt-3">
          <label htmlFor="" className="block font-medium">
            Location
          </label>
          <input
            type="text"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>
        <div className="pt-3">
            <label htmlFor="" className="block font-medium">Price</label>
            <input type="number"  className="p-2 rounded-lg border border-gray-400"/>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
      >
        Upload
      </button>
    </form>
  );
};

export default FileUploadForm;
