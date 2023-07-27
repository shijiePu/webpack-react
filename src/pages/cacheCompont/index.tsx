import { Button } from "antd";
import { useState, useCallback, memo, useEffect } from "react";
import useOnlineStatus from "@/hooks/useOnlineStatus";

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
        缓存组件方式：props.children （
        <a href="https://juejin.cn/post/7112798685687201829#heading-5">链接</a>
        ）
      </h1>

      {showState()}
      <button onClick={() => setState(state + 1)}>
        点我我看看子组件刷新不刷新
      </button>
      {props.children}
    </div>
  );
};

/**父组件**/
const Parent = () => {
  const [parentState, setParentState] = useState(0); //父组件的state

  console.log("Parent组件重新渲染");
  //  useCallback的作用
  // 通常使用useCallback的目的是在向子组件传递函数时,
  // 将要传递的函数进行优化在传递给子组件, 避免子组件进行多次渲染;
  // 并不是为了函数不再重新定义, 也不是对函数定义做优化
  const toChildFun: any = useCallback(() => {
    console.log("toChildFun需要传入子组件的函数");
  }, []);

  const toChildFun2: any = () => {
    console.log("toChildFun2需要传入子组件的函数");
  };

  return (
    <div>
      <Button onClick={() => setParentState((val) => val + 1)}>
        点击我改变父组件中与Child组件无关的state
      </Button>
      {/* //将父组件的函数传入子组件 */}
      <Child func={toChildFun as any}></Child>
      {/* <Child func={toChildFun2 as any}></Child> */}
    </div>
  );
};

// React.memo检测的是props中数据的栈地址是否改变。
// 而父组件重新构建的时候，会重新构建父组件中的所有函数（旧函数销毁，新函数创建，等于更新了函数地址）,
// 新的函数地址传入到子组件中被props检测到栈地址更新。
// 也就引发了子组件的重新渲染。
const Child = memo((props: { func: any }) => {
  console.log("我被打印了就说明子组件重新构建了", props.func);
  return <div>Child</div>;
});

function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }
  return (
    <Button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </Button>
  );
}

const Warpper = () => {
  return (
    <div className="App">
      <Index>
        <Children />
      </Index>
      <br />
      <br />
      <br />
      <Parent></Parent>
      <br />
      <br />
      <StatusBar></StatusBar>
      <SaveButton></SaveButton>
    </div>
  );
};

export default Warpper;
