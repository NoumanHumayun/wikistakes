import { Upload } from "antd";
import { ReactComponent as UploadIcon } from "assets/svg/upload.svg";

const { Dragger } = Upload;
interface UploadComponentProps {
  onRemove: any;
  selectFile: any;
}
const UploadComponent = ({ onRemove, selectFile }: UploadComponentProps) => {
  return (
    <Dragger
      style={{ width: "19vh", padding: "8px" }}
      name="file"
      onRemove={onRemove}
      beforeUpload={selectFile}
    >
      <p className="ant-upload-drag-icon">
        <UploadIcon width="100%" style={{ marginRight: "8px" }} />
      </p>
      <p style={{ fontSize: "12px" }}>Drag & Drop or Click Here</p>
      <p style={{ fontSize: "8px" }}>(*.png, *.jpg, *.mp4)</p>
    </Dragger>
  );
};

export default UploadComponent;
