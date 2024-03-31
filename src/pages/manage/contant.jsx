import { Tabs, Badge, Space } from 'antd';
import MyTable from "./myTable"
import { getAllData } from './mock';
import { useState } from 'react'

export default function Contant() {

    const [dataSouce, setDataSource] = useState([])
    const [activeKey, setActiveKey] = useState(0)

    const onChange = (key) => {
        console.log(key);
        const data = getAllData()[key]
        setDataSource(data)
        setActiveKey(key)
    };

    const numlist = [99, 68, 10]

    const active = '#1677ff'
    const unActive = '#e4e6eb'

    const items = [
        {
            key: 0,
            label: <Space>
                草稿
                <Badge
                    className="site-badge-count-109"
                    count={numlist[0]}
                    style={{ backgroundColor: activeKey == 0 ? active : unActive }}
                /></Space>,
            children: <MyTable dataSouce={dataSouce}></MyTable>,
        },
        {
            key: 1,
            label: <Space>
                已发布
                <Badge
                    className="site-badge-count-109"
                    count={numlist[1]}
                    style={{ backgroundColor: activeKey == 1 ? active : unActive }}
                /></Space>,
            children: <MyTable dataSouce={dataSouce}></MyTable>,
        },
        {
            key: 2,
            label: <Space>
                已删除
                <Badge
                    className="site-badge-count-109"
                    count={numlist[2]}
                    style={{ backgroundColor: activeKey == 2 ? active : unActive }}
                /></Space>,
            children: <MyTable dataSouce={dataSouce}></MyTable>,
        },
    ];

    return <>
        <Tabs defaultActiveKey={activeKey} items={items} onChange={onChange} />
    </>

}