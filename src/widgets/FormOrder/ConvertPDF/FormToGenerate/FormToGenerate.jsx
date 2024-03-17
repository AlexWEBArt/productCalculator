import { useDispatch } from "react-redux";
import { Button, ConfigProvider, DatePicker, Form, Input } from "antd"
import { formForCO } from "../../../../redux/slices/selectedSlice";
import formattingDate from "../../../../utils/formattingDate";
import ru_RU from 'antd/locale/ru_RU'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru'

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


export default function FormToGenerate() {
    const dispatch = useDispatch()

    const customFormat = (value) => `Актуально на: ${value.format(dateFormat)}`

    const handleSubmitFormForCO = (e) => {
        dispatch(formForCO({
            ...e,
            DatePicker: formattingDate(e.DatePicker)
        }))
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
                    DataPicker: dayjs('2024-03-15', dateFormat),
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