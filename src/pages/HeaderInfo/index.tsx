import { Divider } from "antd";
import React, { useMemo, useState } from "react";
import { Link, useLocation, matchRoutes } from "react-router-dom";

const HeaderInfo = (props: any) => {
    // todo
    // url对路由分层，点击那个层级的url跳转到哪个层级

    const { routerConfig } = props
    const location = useLocation()
    const { pathname } = location;
    const [matches, setMatches] = useState([] as string[])

    // pathname 应该为某个层级下面的最深的路由pathname 
    // 1  todo:通过routerConfig去找？
    // const deelPath = deepRelsovePath(routerConfig,)
    // 2  通过看routerConfig直接输出
    const firstChildRoutePathnameList: string[] = ['/antdDesign', '/ArcoDesign']
    const navPath = firstChildRoutePathnameList.find(item => pathname.startsWith(item))

    useMemo(() => {
        if (navPath) {
            const newMatches = matchRoutes(routerConfig, navPath)
            setMatches(newMatches ? newMatches.map(item => item.pathname) : [])
        } else {
            setMatches(firstChildRoutePathnameList)
        }
    }, [routerConfig, navPath])

    return (<div className="header-content">
        {
            matches.length && matches.map((pathname: string) => {
                return (<React.Fragment key={pathname}>
                    <Divider type="vertical" />
                    <Link to={pathname}>{pathname}</Link>
                </React.Fragment>)
            })
        }
    </div>)
}

export default HeaderInfo;