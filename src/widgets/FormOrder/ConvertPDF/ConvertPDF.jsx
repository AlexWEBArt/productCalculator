import { Button, Modal } from "antd"
import { useState, useEffect } from "react";
import GeneratePDF from "./GeneratePDF/GeneratePDF";

export default function ConvertPDF({allOptions}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
      if (!allOptions[0].id) {
          return setDisabled(true)
      }
      setDisabled(false)
  }, [allOptions])

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
      <Button type="primary" disabled={disabled}  onClick={showModal}>Сконвертировать в PDF</Button>
      <Modal title="Коммерческое предложение" width={'fit-content'} open={isModalOpen} 
        onOk={handleOk} onCancel={handleCancel}>
        <GeneratePDF allOptions={allOptions}/>
      </Modal>
    </div>
  )
}