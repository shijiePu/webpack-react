import { Outlet, useLocation, useMatch } from 'react-router-dom';

const Home = () => {
    const location = useLocation()
    // const matches = useMatch()
    console.log('homePage render~~', location)
    // console.log('homePage render~~', location)
    return (
        <>
            {/*当前outlet  当路由匹配到当前组件时，会匹配其继续子路由。
            子路由所有内容在Outlet组件中渲染*/}
            <div className="border">
                <div className="border homepage-header">
                    (公共区域) message：{location.pathname}
                </div>
                <div className="border">
                    {/* outlet可以将所有匹配到的子路由展示出来 */}
                    {/* 没有outlet的话默认只会匹配到优先级最高的路由 */}
                    {/* 而当前匹配到所有子路由会在routeContext 的value中储存 */}
                    {/* Outlet 就存在里面 */}
                    {/* 这个逻辑是支持嵌套的 */}
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home