import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
function requiredPhotos(file) {
  if (file.name.length == 0) {
    console.log(file.name);
    return {
      code: "name-too-large",
      message: `Name is larger than  characters`,
    };
  }

  return null;
}
export default function UploadImages({ formData, submitPhotos }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      submitPhotos(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p
          style={{
            boxSizing: "border-box",
            border: "2px dashed #bdbdbd",
            color: "#bdbdbd",
            padding: "2rem 1rem",
            backgroundColor: "#eee",
            textAlign: "center",
          }}
        >
          <strong>
            Drag 'n' drop some files here, or click to select files
          </strong>
        </p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}
