import { Button, Modal } from "antd"
import { useState, useEffect } from "react";
import GeneratePDF from "./GeneratePDF/GeneratePDF";

export default function ConvertPDF({ finalPrice, tax, purchases }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (!finalPrice) {
      return setDisabled(true)
    }
    setDisabled(false)
  }, [finalPrice])

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="button-wrapper">
      <Button type="primary" disabled={disabled} onClick={showModal}>Сконвертировать в PDF</Button>
      <Modal title="Коммерческое предложение" width={'fit-content'} open={isModalOpen} footer={null} onCancel={handleCancel}>
        <GeneratePDF finalPrice={finalPrice} tax={tax} purchases={purchases} />
      </Modal>
    </div>
  )
}