import { Space, Form, Input, Select, Button, message } from 'antd';
import Contant from './contant'
import { getTimer, getKeywordsList } from './mock';

const { Option } = Select;

const Page = () => {

    const [form] = Form.useForm(); 

    const onFinish = (values) => {
        console.log('Received values from form: ', values);
        message.open({
            type: 'success',
            content: '发送！',
        });
    };

    const onReset = () => {
        form.resetFields();
      };

    const timerOptions = getTimer()
    const keywordsOptions = getKeywordsList()



    return (<>
        <div>
            <Form
                name="customized_form_controls"
                layout="inline"
                form={form}
                onFinish={onFinish}
                style={{ padding: '20px 10px' }}
            >
                <Form.Item >
                    <Space.Compact>
                        <Form.Item
                            name={['nameKey', 'name']}
                            noStyle
                            rules={[{ required: false }]}
                        >
                            <Select style={{ width: '100px' }} placeholder="选择名称">
                                {keywordsOptions.map(item => <Option key={item.value} value={item.value}>{item.name}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={['nameKey', 'keyValue']}
                            noStyle
                            rules={[{ required: false, }]}
                        >
                            <Input style={{ width: '1000px' }} placeholder="请输入框架名中的关键词"></Input>
                        </Form.Item>
                    </Space.Compact>
                </Form.Item>

                <Form.Item name="date-picker"  >
                    <Select style={{ width: '300px' }} placeholder="选择报告期">
                        {timerOptions.map(item => <Option key={item.value} value={item.value}>{item.name}</Option>)}
                    </Select>
                </Form.Item>

                <Space>
                    <Button type="primary" htmlType="submit">提交</Button>
                    <Button onClick={onReset}>重置</Button>
                </Space>

            </Form>

        </div>
        <div className='contant'>
            <Contant></Contant>
        </div>
    </>)
};
export default Page;