import { Button, Modal } from "antd"
import { useState } from "react";
import GeneratePDF from "./GeneratePDF/GeneratePDF";

export default function ConvertPDF({allOptions}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="button-wrapper">
      <Button type="primary" onClick={showModal}>Сконвертировать в PDF</Button>
      <Modal title="Коммерческое предложение" width={'fit-content'} open={isModalOpen} 
        onOk={handleOk} onCancel={handleCancel} okButtonProps={{
      }}>
        <GeneratePDF allOptions={allOptions}/>
      </Modal>
    </div>
  )
}