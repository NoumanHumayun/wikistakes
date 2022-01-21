import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillProps {
  forwardRef?: any;
  value?: string;
  onChange?: (value: string) => void;
}
const Copy = ({ value, onChange, forwardRef }: QuillProps) => {
  const [_value, setValue] = useState(value || "");

  useEffect(() => setValue(value||""), [value]);

  const onValueChange = useCallback((_text: string) => setValue(_text), []);
  const onBlur = useCallback(() => onChange && onChange(_value), [onChange, _value]);

  return <ReactQuill ref={forwardRef} value={_value} onChange={onValueChange} onBlur={onBlur} />;
}

export default Copy;