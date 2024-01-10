import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Dropzone({
  onLoad,
}: {
  onLoad: (svg: string) => void;
}) {
  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const svgString = (e.target as FileReader).result;
          if (!svgString) {
            // TODO handle, i.e. add onError?
            return;
          }
          onLoad(svgString as string);
        };
        reader.readAsText(file);
      });
    },
    [onLoad]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className='flex h-40 w-80 flex-col justify-center rounded border-4 border-dashed'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>¡drop the files here!</p>
      ) : (
        <p>
          drag 'n' drop some files here <br />
          <span className='text-xs'>...or click to select files</span>
        </p>
      )}
    </div>
  );
}
