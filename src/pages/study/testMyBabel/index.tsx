import { useEffect, useState } from "react";

const TestMybabel = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    testFn();
  }, []);

  const testFn: any = async () => {
    const aaa: any = await getText();
    console.log("aaa：list", aaa);

    setList(aaa);
  };

  const getText = () => {
    console.log("getText");
    return ["TestMybabel", "TestMybabel2", "TestMybabel3"];
  };

  return (
    <div>
      <h1>TestMybabel:</h1>
      {
      (list as any).map((item: any) => {
        return <h1 key={item}>{item}</h1>;
      })
      }
    </div>
  );
};

export default TestMybabel;
