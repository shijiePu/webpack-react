import { Button } from 'antd';
import { Outlet } from 'react-router-dom';

const Home = () => {
    console.log('homePage render~~')
    return (
        <>
            HomePage
            <Button type="primary">antd 按钮</Button>
            <Outlet/>
        </>
    )
}

export default Home