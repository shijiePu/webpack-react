import { Table, Space, Button, message, Divider, Pagination, ConfigProvider } from "antd";
import { getTimer, getKeywordsList, getDataSource } from "./mock";
import { useEffect, useRef, useState } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import zhCN from "antd/lib/locale/zh_CN"
import './index.css'
import PermissionBtn from "@/components/PermissionBtn";
import { Modal as MyModal } from '@/components/modal'

function Dot({ status }) {

    const dot = useRef({
        className: '',
        value: ''
    })

    if (status == '1') {
        dot.current.value = '草稿'
        dot.current.className = `dot${status}`
    }


    return <>
        <span className={dot.current.className}></span>
        <span >{dot.current.value}</span>
    </>

}

const dataSource = getDataSource()
const timerList = getTimer().map(item => ({ value: item.value, text: item.text }))
const keywordsList = getKeywordsList().map(item => ({ value: item.value, text: item.name }))

const _columns = [
    {
        title: '公司/框架姓名',
        dataIndex: 'name',
        key: 'name',
        render: (value, record) => {
            return record.isRoot ? value : <a>{value}</a>
        }
    },
    {
        title: '报告期',
        dataIndex: 'timer',
        key: 'timer',
        filters: timerList,
        onFilter: (value, record) => record.isRoot || record.timer.indexOf(value) === 0
    },
    {
        title: '创建人/创建时间',
        dataIndex: 'create',
        key: 'create',
        render: (value, record) => {
            const text = '' + record.create + ' ' + record.createTime + '00:00:00'
            return record.isRoot ? '' : text
        }
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: '140px',
        render: (value, record) => record.isRoot ? '' : <Dot status={value}></Dot>
    },
    {
        title: '所属公司',
        dataIndex: 'affiliation',
        key: 'affiliation',
        filters: keywordsList,
        onFilter: (value, record) => record.isRoot || record.affiliation.indexOf(value) === 0
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        width: '240px',
        render: (value, record) => (
            <Space size="middle">
                <PermissionBtn roles='admin' fallback={<Button>暂无权限</Button>}>
                    <Button onClick={() => send(record.key)}>发送</Button>
                </PermissionBtn>
                <PermissionBtn roles={['admin', 'user']}>
                    <Button onClick={() => edit(record.key)}>编辑</Button>
                </PermissionBtn>
                <PermissionBtn roles={['admin', 'user']}>
                    <Button onClick={() => copy(record.key)}>复制</Button>
                </PermissionBtn>
                <PermissionBtn roles={['admin', 'user']}>
                    <Button onClick={() => del(record.key)} icon={<DeleteOutlined />}></Button>
                </PermissionBtn>
            </Space>
        ),
    }
];

const send = () => {
    message.open({
        type: 'success',
        content: '发送！',
    });
}

const edit = () => {
    message.open({
        type: 'success',
        content: '编辑！',
    });
}

const copy = () => {
    message.open({
        type: 'success',
        content: '复制！',
    });
}

const del = () => {
    message.open({
        type: 'success',
        content: '删除！',
    });
}


export default function myTable(props) {
    const { columns = _columns } = props

    const [selectedRowKeys, setSelectedRowKeys] = useState(0)

    const [showModal, setShowModal] = useState(false)


    const timerOptions = useRef(null)
    const keywordsOptions = useRef(null)
    useEffect(() => {
        timerOptions.current = getTimer()
        keywordsOptions.current = getKeywordsList()


    }, [])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys)
        },
        onSelect: (record, selected, selectedRows) => {
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
        },
    };

    const addHandle = () => {
        message.open({
            type: 'success',
            content: '批量发布！',
        });
    }

    const delHandle = () => {
        message.open({
            type: 'success',
            content: '批量删除！',
        });
    }

    const updateHandle = () => {
        setShowModal(true)
        // message.open({
        //     type: 'success',
        //     content: '上传框架！',
        // });
    }


    return <div>
        <div className="table_head">
            <Space>
                <span style={{ display: 'flex', minWidth: 80 }}>选中 <span style={{ display: 'flex', justifyContent: 'center', flexBasis: 20 }}>{selectedRowKeys.length || 0}</span> 条</span>
                <Divider type="vertical" />
                <Button onClick={addHandle}>批量发布</Button>
                <Button onClick={delHandle}>批量删除</Button>
            </Space>

            <Button type="primary" onClick={updateHandle}>+上传框架</Button>


        </div>
        <Table
            // 勾选
            rowSelection={{ ...rowSelection, checkStrictly: false }}
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            defaultExpandAllRows={true}
        />
        <ConfigProvider locale={zhCN}>
            <Pagination
                total={dataSource.length}
                showSizeChanger
                showQuickJumper
                defaultPageSize={20}
                showTotal={(total) => `共 ${total} 条`}
                className="manage__pagination-style"
            />
        </ConfigProvider>

        <MyModal
            open={showModal}
            title="title"
        >
            <h2>MyModal</h2>
        </MyModal>

    </div>
}