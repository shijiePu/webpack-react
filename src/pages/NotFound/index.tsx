import { Button } from "antd"
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const homePagePath = "/"
const notFound = () => {

    // isBack 初始值为false  为true时渲染 Navigate 组件 
    const [isBack, setBack] = useState(false)

    const navigateGoIndex = () => {
        setBack(true)
    }

    const goIndex = () => {
        navigate(homePagePath)
    }
    // 比如实现一个 404页面自动跳转到首页
    const navigate = useNavigate()
    return (<>
        404 Not Found
        <Button onClick={goIndex}>useNavigate 回到首页</Button>

        <Link to={homePagePath}>Link 回到首页</Link>

        <Button onClick={navigateGoIndex}>Navigate 回到首页</Button>

        {/* 
            Navigate 有4个属性 { to, replace, state, relative }
            replace=false : replace方式跳转 
            replace=true : push方式跳转（Link组件也是这个方式）
        */}

        {/* 该组件渲染完成就会自动跳转页面 */}
        {isBack && <Navigate to={homePagePath} />}
    </>)
}

export default notFound;