import { Divider, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"
import "./index.scss"

const App = (props) => {
    const { state = 3, desc = '符合要求', time = '2242:24:24', title = '通知中心' } = props

    const getState = () => {
        const cd = state == 1 ? {
            text: '审批中',
            className: 'state1'
        } : (state == 2 ? {
            text: '待审批',
            className: 'state2'
        } : {
            text: '未通过',
            className: 'state3'
        })
        return (<div className={`state-card ${cd.className}`}>
            {cd.text}
        </div>)
    }

    return <div>
        <div className="step-title">
            <Space >
                <ArrowRightOutlined className="icon" />
                <span className="step-title">外码变动申请</span>
            </Space>
        </div>
        <div className="step-content" >
            <Divider className="divider" type="vertical" style={{ margin: '0 10px' }}></Divider>
            <div className='appr-card'>
                <div className='card-line'>
                    <div className='card-title'>{title}</div>
                    <div className='card-time'>{time}</div>
                </div>
                <div className='card-line'>
                    <div className='card-state'>{getState()}</div>
                    <div className='card-desc'>{desc}</div>
                </div>
            </div >
        </div>
    </div>
};

export default App;