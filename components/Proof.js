import { useDropzone } from "react-dropzone";
import React from "react";

export default function DropZone() {
  const [myFiles, setMyFiles] = React.useState([]);

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  //   acceptedFiles,
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
            className="btn btn-outline-light ml-1"
            aria-label="Close"
          >
            ❌
          </button>
        </span>
      </div>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="mb-3" />
        <img
          style={{
            width: "110%",
            minWidth: "110%",
          }}
          src="/icon-drag.jpg"
          className="img-thumbnail ml-n3"
          alt="Safer Baby Mask"
        />
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
