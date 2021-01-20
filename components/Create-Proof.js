import { useDropzone } from "react-dropzone";
import React from "react";

export default function DropZone({ handleProof }) {
  const [myFiles, setMyFiles] = React.useState([]);

  React.useEffect(() => {
    handleProof(myFiles);
  }, [myFiles]);

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const files = myFiles.map((file) => (
    <li key={file.path}>
      <div className="mt-1">
        {file.path}
        <span>
          <button
            onClick={removeFile(file)}
            type="button"
            className="btn btn-outline-light ml-2"
          >
            <i aria-hidden className="fas fa-times"></i>
          </button>
        </span>
      </div>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="mb-2" />
        <div className="dropContainer">
          <img
            src="/icon-drag.jpg"
            className="img-thumbnail dropIMG ml-n3"
            alt="Proof Drag"
          />
        </div>
      </div>
      <div
        className="dropText"
        style={{
          background: files.length === 0 && "transparent",
        }}
      >
        <ul>{files}</ul>
      </div>
    </section>
  );
}
