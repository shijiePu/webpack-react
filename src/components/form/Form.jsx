import { forwardRef, useRef, useState, useImperativeHandle } from "react"
import FormContext from "./formContext"
import "./index.scss"

class FormStore {
    constructor(defaultFormValue) {
        this.data = {}
        this.control = {}
        this.defaultFormValue = defaultFormValue;
    }

    notifyChange(name) {
        console.log('notifyChange', name);
        const controller = this.control[name]
        if (controller) controller?.changeValue()
    }

    setValue(key, value) {
        const data = this.data[key]
        this.notifyChange(key)
        if (!data) return;
        console.log(`set -${key}- : formIterm中的value: ${value}`);
        this.data[key].value = value
    }

    getValue(key) {
        const data = this.data[key]
        if (!data) return;
        console.log(`get -${key}- : formIterm中的value`, this.data[key].value);
        return this.data[key].value
    }


    // 初始化数据格式
    getItemData(data) {
        const {
            value = ''
        } = data
        return { ...data, value }
    }



    addFormItem(key, control, value) {

        // console.log(`将 -${key}- : formIterm中的数据`);
        const itemData = this.getItemData(value)
        console.log(itemData.value);
        this.data[key] = itemData;
        this.control[key] = control;
        this.setValue(key, itemData.value)
    }

    delFormItem(key) {
        // console.log(`删除 -${key}- : formIterm中的数据`);
        delete this.data[key]
        delete this.control[key]
    }

    clearformFiled(name) {
        this.data[name] = null
        this.notifyChange(name)
    }

    reset() {
        Object.keys(this.data).forEach(key => {
            this.clearformFiled(key)
        })
    }

    submit() {
        let res = {}
        Object.keys(this.data).forEach(key => {
            res[key] = this.getValue(key)
        })
        return res
    }
}


// 当前useFrom 不能取到最新的实例data
// function useFrom(form, defaultFormValue) {
//     const _form = new FormStore(defaultFormValue)
//     console.log({_form});
//     return _form
// }

function useFrom(form, defaultFormValue = {}) {
    console.log('useForm', { form, defaultFormValue });
    const formRef = useRef(null);
    const [, forceUpdate] = useState({})

    // 初始化form
    if (!formRef.current) {
        if (form) {
            formRef.current = form  /* 如果已经有 form，那么复用当前 form  */
        } else {
            const formStoreCurrent = new FormStore(forceUpdate, defaultFormValue)
            /* 获取实例方法 */
            formRef.current = formStoreCurrent
        }
    }
    console.log('useForm => return formRef', formRef.current);
    return formRef.current;
}




function Form({
    form,
    initialValues,
    children
}, ref) {
    const formInstance = useFrom(form, initialValues)
    console.log(formInstance);

    useImperativeHandle(ref, () => formInstance, [])


    return <FormContext.Provider value={formInstance}>
        <form className="form">
            {children}
        </form>
    </FormContext.Provider>
}

export default forwardRef(Form);