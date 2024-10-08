import React, { ChangeEvent, useState } from 'react';


const UploadFile: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let selected = e.target.files && e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label>
        <input type="file" className=' file-input' onChange={handleChange} />
        <span>+</span>
      </label>
        
      <label>
      <input type='text' placeholder='Title' required/>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
      </div>
    </form>
  );
}

export default UploadFile;