// import React, { ReactElement } from "react";

export const Tabs = (props: any) => {
    console.log('Tabs', props);

    return (<>
        <div>{props.children}</div>
    </>)
}

export const TabItem = (props: any) => {
    console.log('TabItem', props);
    // const { activeName, element } = props
    // return (<>
    //     <span>{element}</span>

    // </>)
    return <div>{props.element}</div>
}
TabItem.displayName = 'tabItem'