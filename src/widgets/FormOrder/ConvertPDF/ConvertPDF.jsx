import { Button, Modal } from "antd"
import { useState, useEffect } from "react";
import GeneratePDF from "./GeneratePDF/GeneratePDF";
import FormToGenerate from "./FormToGenerate/FormToGenerate";
import { useDispatch, useSelector } from "react-redux";
import { formForCO } from "../../../redux/slices/selectedSlice";

export default function ConvertPDF({ finalPrice, tax, purchases }) {
  const { dataCO } = useSelector(store => store.selected)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    if (!finalPrice) {
      return setDisabled(true)
    }
    setDisabled(false)
  }, [finalPrice])

  const handleCancel = () => {
    dispatch(formForCO(null))
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="button-wrapper">
      <Button type="primary" disabled={disabled} onClick={showModal}>Сконвертировать в PDF</Button>
      <Modal title="Коммерческое предложение" width={'fit-content'} open={isModalOpen} footer={null} onCancel={handleCancel}>
        {
          dataCO ?
            <GeneratePDF finalPrice={finalPrice} tax={tax} purchases={purchases} dataCO={dataCO} />
            :
            <FormToGenerate />
        }
      </Modal>
    </div>
  )
}