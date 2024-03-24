import { cloneElement, useContext, useEffect, useState, isValidElement, memo, useMemo } from "react"
import FormContext from "./formContext"

function FormItem(props) {
    const {
        name,
        children,
        defaultValue,
    } = props;

    const formInstance = useContext(FormContext)
    console.log(name, 'FormItem执行');

    const [value, setValue] = useState('')



    // formInstance store data修改进行更新
    const onStoreChange = useMemo(() => {
        const onStoreChange = {
            changeValue() {
                // 对外暴露组件更新的方法
                setValue({})
            }
        }
        return onStoreChange
    }, [formInstance])




    /**  1 将当前formIterm中的数据存入store中
     *  @key  存入data中的key 也就是当前formitem的name
     *  @onStoreChange 存入可更新当前 formitem组件的 setValue({})方法
     *  @defaultValue 默认值
    */
    useEffect(() => {
        // console.log('将当前formIterm中的数据存入store中', name, onStoreChange,);
        formInstance.addFormItem(name, onStoreChange, { value: defaultValue })
        return () => formInstance.delFormItem(name, onStoreChange)
    }, [onStoreChange])

    const triggerHandle = (event) => {
        const value = event.target.value
        formInstance.setValue(name, value)
    }


    /**  2
     *  让当前formIterm成为受控组件：
     *  注入 onchange 方法 && value
    */
    const newChildren = () => {
        const reChildren = isValidElement(children) ?
            cloneElement(children, {
                'onChange': triggerHandle,
                value: formInstance.getValue(name),
                className: 'form_input'
            }) : children

        return reChildren
    }


    return <div className="formItem">
        <label className="item_label" >{name}:</label>
        {newChildren()}
    </div>
}

export default memo(FormItem);