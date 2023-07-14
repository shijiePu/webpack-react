import { useState } from "react";

// 介绍了一个快照的的功能
// 到提示框运行时，React 中存储的 state 可能已经发生了更改，
// 但它是使用用户与之交互时状态的快照进行调度的！

// 可以理解成如此的话可以保证react输出的逻辑是统一的

const ConceptsOfSnapshots = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>number:{number}</h1>
      <br />
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 1500);
        }}
      >
        setNumber(number + 5) && setTimeout alert(number);
      </button>
      <br />
      <br />
      <br />
      <span>
        <h3>设置 state 只会为下一次渲染变更 state 的值。</h3>
        在第一次渲染期间，number 为 0。这也就解释了为什么在 那次渲染中的 onClick
        处理函数中，即便在调用了 setNumber(number + 1) 之后，number 的值也仍然是
        0：
      </span>
      <br />
      <br />
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        setNumber(number + 1) * 3
      </button>
      <h2>摘要</h2> 
      <h3>设置 state 请求一次新的渲染。 React 将 state</h3>
      <h3>存储在组件之外，就像在架子上一样。 当你调用 useState 时，React</h3>
      <h3>会为你提供该次渲染 的一张 state 快照。</h3>
      <h3>变量和事件处理函数不会在重渲染中“存活”。每个渲染都有自己的事件处理函数。</h3>
      <h3>快照。 你可以在心中替换事件处理函数中的 state，类似于替换渲染的 JSX。</h3>
      <h3>过去创建的事件处理函数拥有的是创建它们的那次渲染中的 state 值。</h3>
    </>
  );
};

export default ConceptsOfSnapshots;
