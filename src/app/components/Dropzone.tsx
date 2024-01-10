import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      // reader.onabort = () => console.log('file reading was aborted');
      // reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        // TODO parse svg
        // const binaryStr = reader.result;
        // console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className='rounded border px-4 py-2'>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
