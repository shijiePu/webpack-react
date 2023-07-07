import { Outlet, useParams } from "react-router-dom";

function AntdDesignChild() {
  // todo  没有匹配到该组件   顺到/antdDesign组件了
  // did
  let { user } = useParams();
  console.log("AntdDsignChild params user ", user);
  return (
    <>
      <div className="border">
        <h1>i am AntdDesgnChild</h1>
        <h1 style={{ color: "red" }}>my param is {user}</h1>
        <Outlet />
      </div>
    </>
  );
}

export default AntdDesignChild;
