import { Button, Modal } from "antd"
import React, { useState, useEffect } from "react";
import GeneratePDF from "./GeneratePDF/GeneratePDF";
import FormToGenerate from "./FormToGenerate/FormToGenerate";
import { formForCO } from "../../../redux/slices/selectedSlice";
import { Purchase } from "../FormOrder";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const ConvertPDF: React.FC<{ finalPrice: number, tax: number, purchases: Purchase[] }> = ({ finalPrice, tax, purchases }) => {
  const { dataCO } = useAppSelector(store => store.selected)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true)
  const dispatch = useAppDispatch()

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 1199;

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
      {!isMobile && <Button type="primary" disabled={disabled} onClick={showModal}>Сконвертировать в PDF</Button>}
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

export default ConvertPDF