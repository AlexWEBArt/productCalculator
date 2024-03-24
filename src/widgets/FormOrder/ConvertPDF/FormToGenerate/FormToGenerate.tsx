import { useDispatch } from "react-redux";
import { Button, ConfigProvider, DatePicker, Form, type FormProps, Input } from "antd"
import { formForCO } from "../../../../redux/slices/selectedSlice";
import ru_RU from 'antd/locale/ru_RU'
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru'
import React from "react";

type FieldType = {
    InputCompanyName: string;
    DatePicker: string;
    InputOperatorName: string;
  };

const dateFormat = 'YYYY-MM-DD';
dayjs.extend(customParseFormat);

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const FormToGenerate: React.FC = () => {
    const dispatch = useDispatch()

    const customFormat = (value: Dayjs) => `Актуально на: ${value.format(dateFormat)}`

    const handleSubmitFormForCO: FormProps<FieldType>["onFinish"] = (e) => {
        const datePickerValue: Dayjs = dayjs(e.DatePicker);
        const formattedDate: string = datePickerValue.format('YYYY-MM-DD');
        dispatch(formForCO({
            ...e,
            DatePicker: formattedDate
        }));
    }

    return (
        <ConfigProvider locale={ru_RU}>
            <Form
                {...formItemLayout}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    InputCompanyName: 'Ромашка',
                    DatePicker: dayjs(),
                    InputOperatorName: 'Иванов Иван Иванович'
                }}
                onFinish={(e) => handleSubmitFormForCO(e)}
            >
                <Form.Item
                    label="КП для компании ..."
                    name="InputCompanyName"
                    rules={[
                        {
                            required: true,
                            message: 'Заполните поле!',
                        }
                    ]}

                >
                    <Input placeholder="Ведите название компании" />
                </Form.Item>
                <Form.Item
                    label="Актуальность КП на ..."
                    name="DatePicker"
                    rules={[
                        {
                            required: true,
                            message: 'Выберите дату!',
                        },
                    ]}
                >
                    <DatePicker format={customFormat} />
                </Form.Item>
                <Form.Item
                    label="ФИО оператора"
                    name="InputOperatorName"
                    rules={[
                        {
                            pattern: new RegExp(/[а-яА-ЯЁё]/),
                            message: "Используйте русский алфавит"
                        },
                        {
                            required: true,
                            message: 'Заполните поле!',
                        },
                    ]}

                >
                    <Input placeholder="Ведите название компании" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Генерировать PDF
                </Button>
            </Form>
        </ConfigProvider>
    )
}

export default FormToGenerate