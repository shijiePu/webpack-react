import { Form, FormItem } from "@/components/form/index.jsx";
import { Button, Input, Space } from "antd";
import { useRef } from "react";

function FormDemo() {

    const form = useRef(null)

    const fromData = {}

    const onFinish = () => {

    }


    // submit 有问题  当前的可访问的form实例 一直是初始数据  获取不到最新的数据？？？？
    // FormItem组件 useMemo包裹changeValue，使当前组件实例改变 与 各个子组件的updater需要重新生成
    const submit = () => {
        let res = form.current.submit()
    }

    const reset = () => {
        form.current.reset()
    }

    return (
        <Form
            ref={form}
            initialValues={fromData}
            onFinish={onFinish}
        >
            <FormItem name='user' defaultValue="psj">
                <Input></Input>
            </FormItem>

            <FormItem name='psw' defaultValue="">
                <Input></Input>
            </FormItem>

            <div className="footer">
                <Space>
                    <Button type="primary" onClick={submit}>提交</Button>
                    <Button type="primary" onClick={reset}>重置</Button>
                </Space>
            </div>
        </Form>
    )
}

export default FormDemo;