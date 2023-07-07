import { useState } from "react";

const Children = (props: any) => {
  console.log("子组件刷新了");

  const log = () => {
    console.log("子组件刷新了");
    return <span>刷新组件</span>;
  };

  return (
    <div>
      <span>这是children组件</span>
      {log()}
    </div>
  );
};

const Index = (props: any) => {
  const [state, setState] = useState(0);

  const showState = () => {
    console.log("Index组件刷新");
    return state;
  };
  return (
    <div>
      {/* //当这个按钮点击之后我们发现Children组件并不重新刷新了，其实原理我理解的是react帮我们做了一层
      //处理当渲染前与渲染后两个组件的引用地址一样他就会放弃render，当然这是我的猜测，这个的话之后
      //我看到源码的时候会和大家讲一下在补充一下。 */}
      <h1>
        缓存组件方式：props.children{" "}（
        <a href="https://juejin.cn/post/7112798685687201829#heading-5">链接</a>）
      </h1>

      {showState()}
      <button onClick={() => setState(state + 1)}>
        点我我看看子组件刷新不刷新
      </button>
      {props.children}
    </div>
  );
};

const Warpper = () => {
  return (
    <div className="App">
      <Index>
        <Children />
      </Index>
    </div>
  );
};

export default Warpper;
