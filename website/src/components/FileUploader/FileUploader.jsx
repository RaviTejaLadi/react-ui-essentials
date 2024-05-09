import React, { Fragment, useRef, useState } from "react";
import styles from "./FileUploader.module.css";
import CustomButton from "../Button/CustomButton";
import Switch from "./Switch";
import CloseButton from "../MustComponents/CloseButton/CloseButton";

const UploadSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-cloud-upload"
    {...props}
  >
    <path d="M7 18a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
    <path d="m9 15 3-3 3 3m-3-3v9" />
  </svg>
);

const FileUploader = ({
  onFileUpload,
  width,
  height,
  title,
  description,
  multiple,
  showSelectedFiles,
  acceptedExtensions,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isMultiple, setIsMultiple] = useState(false);
  const [error, setError] = useState("");

  const inputFile = useRef(null);
  const clickOnDragAndDropContainer = () => {
    inputFile.current.click();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      validateAndAddFiles(files);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      validateAndAddFiles(files);
    }
  };

  const validateAndAddFiles = (files) => {
    const validFiles = [];
    Array.from(files).forEach((file) => {
      const fileNameParts = file.name.split(".");
      const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

      if (fileNameParts.length > 2) {
        setError(`File "${file.name}" has double extensions and is not accepted.`);
      } else if (!acceptedExtensions.includes(fileExtension)) {
        setError(`File "${file.name}" has an invalid extension and is not accepted.`);
      } else {
        validFiles.push(file);
      }
    });

    if (validFiles.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
      setError("");
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onFileUpload(selectedFiles);
      setSelectedFiles([]);
      setError("");
    } else {
      setError("Please select file(s) before uploading.");
    }
  };

  const handleRemove = (index) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };
  return (
    <div className={styles.rue_file_uploader_container} style={{ width: width, height: height }}>
      <div className={styles.rue_drag_and_drop_container}>
        <div
          className={styles.rue_drag_and_drop}
          onClick={clickOnDragAndDropContainer}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <UploadSvg width="3.125rem" height="3.125rem" />
            </div>
            <p style={{ fontWeight: "700", marginTop: "10px" }}>{title}</p>
            <p style={{ color: "#ccc", marginTop: "10px" }}>{description}</p>
            <p style={{ color: "#ccc", marginTop: "10px" }}>{selectedFiles.length} files</p>
          </div>
          <input
            type="file"
            ref={inputFile}
            onChange={handleFileChange}
            multiple={isMultiple}
            style={{ display: "none" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "1rem",
          }}
        >
          <div
            style={{
              width: "35%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CustomButton variant="primary" size="sm" onClick={clickOnDragAndDropContainer}>
              Select files
            </CustomButton>
            <CustomButton variant="secondary" size="sm" onClick={handleUpload}>
              Upload
            </CustomButton>
          </div>
          {multiple && (
            <div className={styles.rue_multiple_files_check_container}>
              <Switch
                id="custom-switch"
                label="Multiple Files Upload"
                checked={isMultiple}
                onChange={() => setIsMultiple(!isMultiple)}
              />
            </div>
          )}
        </div>
      </div>
      {showSelectedFiles && (
        <Fragment>
          {selectedFiles.length > 0 && (
            <div className={styles.rue_selected_files_container}>
              <p style={{ fontWeight: "500" }}>Selected files:</p>
              <hr />
              {selectedFiles.map((file, index) => (
                <div key={index} className={styles.rue_selected_file}>
                  <span style={{ fontWeight: "400" }}>
                    {file.name} - {(file.size / 1024).toFixed(2)} KB
                  </span>
                  <CloseButton variant="light" size="sm" onClick={() => handleRemove(index)} />
                </div>
              ))}
            </div>
          )}
        </Fragment>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUploader;
