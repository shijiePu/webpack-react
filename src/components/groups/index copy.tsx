// 封装一个组件
import React, { useContext, useEffect, useMemo, useState } from "react"
import "./index.scss"
import { Button } from "antd"
import { GroupContext, author } from '../context/groupContext'

// 隐式注入props
export function Group(props: any) {
    return /*#__PURE__*/React.createElement(GroupContext.Provider, {
        value: {
            author
        },
    }, <Wrap>{props.children}</Wrap>);
}


export function Wrap(props: any) {
    const { author } = useContext(GroupContext)
    const { _name } = author
    console.log({ author });
    const [authorName, setAuthorName] = useState(author?._name || '')
    const handleCallback = (val: string) => {
        console.log('onClick', _name);
        author.onChange(val)
        // author改变之后需要手动去更新
    }
    useEffect(() => {
        console.log('author change', author);
        setAuthorName(_name)
    }, [_name])
    // todo  如何给所有children添加一个 callback
    const children: any = React.cloneElement(props.children, {
        author: authorName,
        callback: handleCallback
    })

    return (<>
        {children}
    </>)
}



export function GroupItem(props: any) {
    const { author, name, callback } = props;
    const onClick = () => {
        callback('lxy')
    }
    return <div>
        名称：{name}
        作者：{author}
        <Button className="cb-btn" onClick={onClick} >点击</Button>
    </div>

}