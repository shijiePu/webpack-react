import { Tabs, TabItem } from "@/components/tabs";



const TabsDemo = () => {
    console.log('TabsDemo');
    
    // return <Tabs onChange={(type: any) => console.log(type)} >
    //     <TabItem name="react" label="react" >React</TabItem>
    //     <TabItem name="vue" label="vue" >Vue</TabItem>
    //     <TabItem name="angular" label="angular"  >Angular</TabItem>
    // </Tabs>
    return (<Tabs>
        <TabItem activeName='tab1' element={<Tab1 />} />
        <TabItem activeName='tab2' element={<Tab2 />} />
        <TabItem activeName='tab3' element={<Tab3 />} />
    </Tabs>)
}

const Tab1 = () => {
    return (<>TabItem: I am Tab1</>)
}

const Tab2 = () => {
    return (<>TabItem: I am Tab2</>)
}

const Tab3 = () => {
    return (<>TabItem: I am Tab3</>)
}

export default TabsDemo;