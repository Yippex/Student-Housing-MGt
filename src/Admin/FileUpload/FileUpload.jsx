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
    <div className="w-full">
      <div>
        <form
          className="bg-white p-6 rounded-lg shadow-lg "
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="file"
            >
              Select a file
            </label>
            <input
              type="file"
              id="file"
              className="border border-gray-400 p-2 rounded-lg w-full"
              onChange={handleFileChange}
            />
            <div className="mb-3 pt-2">
              <label htmlFor="" className="block font-medium">
                Name of Lodge
              </label>
              <input
                type="text"
                name=""
                id=""
                className="p-2 rounded-lg border border-gray-400 w-full"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="block font-medium">
                Location
              </label>
              <input
                type="text"
                className="p-2 rounded-lg border border-gray-400 w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="block font-medium">
                Price
              </label>
              <input
                type="number"
                className="p-2 rounded-lg border border-gray-400 w-full"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="block font-medium">
              Description
            </label>
            <input
              type="text"
              className="p-2 rounded-lg border border-gray-400 w-full "
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 w-full px-4 rounded-lg hover:bg-blue-600"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploadForm;
