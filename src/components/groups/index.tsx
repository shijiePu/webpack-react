// 封装一个组件
import React, { useState } from "react"
import "./index.scss"
import { Button } from "antd"
import { GroupContext, author } from '../context/groupContext'

// 隐式注入props
export function Group(props: any) {
    console.log(author);
    return <GroupContext.Provider value={author}>
        <Wrap>{...props.children}</Wrap>
    </GroupContext.Provider>
}

export function Wrap(props: any) {
    // todo  如何给所有children添加一个 callback
    const newChildren: React.ReactElement[] = []
    React.Children.forEach(props.children, (item: any, index) => {
        //displayName todo
        console.log({ item, index });
        const type: any = item.type
        const validItem = React.isValidElement(item) ?
            (type.displayName === 'item' ? item : null)
            : (typeof item === "function" ? item() : null);
        console.log({ validItem });
        validItem && newChildren.push(validItem)
    })
    return (<>
        {...newChildren}
    </>)
}

export function Text(props: any) {
    return <>{props?.text || ''}</>;

}

export function GroupItem(props: any) {
    console.log({ props });
    const { author, name } = props;
    console.log({ author, name });


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
GroupItem.displayName = 'item'