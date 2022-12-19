// 封装一个组件
import React, { useContext, useMemo, useState } from "react"
import "./index.scss"
import { Button, Divider } from "antd"
import { GroupContext, author } from '../context/groupContext'

// 隐式注入props
export function Group(props: any) {
    console.log(author);
    return /*#__PURE__*/React.createElement(GroupContext.Provider, {
        value: {
            author
        },
    }, <Wrap>{...props.children}</Wrap>);
}

export function Wrap(props: any) {
    const handleCallback =
        (val: unknown) => console.log(' children 内容：', val)
    // todo  如何给所有children添加一个 callback
    // const children = useMemo(() => React.cloneElement(props.children,
    //     { callback: handleCallback }
    // ), [props.children])

    const res = React.createElement(Divider, props.children)
    return (<>
        {props.children}
        {res}
    </>)
}



export function GroupItem(props: any) {
    const { author, name } = props;

    const onClick = () => {
        console.log('onClick', author);
        author.onChange('lxy')
        setAuthorName(author?._name || '')
    }

    const [authorName, setAuthorName] = useState(author?._name || '')

    return <div>
        名称：{name}
        作者：{authorName}
        <Button className="cb-btn" onClick={onClick} >点击</Button>
    </div>

}