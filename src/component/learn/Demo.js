import React, { Component, memo, createRef, useState, useEffect } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { text: "头条新闻" },
    };

    this.testRef = createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        this.setState({
          text: "返回顶部",
          data: { text: "返回顶部" },
        });
      } else {
        this.setState({
          text: "头条新闻",
          data: { text: "头条新闻" },
        });
      }
    });

    console.log("sssss:", this.testRef.current.innerText);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.data.text != this.state.data.text;
  //   }

  render() {
    // console.log("render", 111);

    const { text, data } = this.state;
    return (
      //   <div>
      //     {this._renderContent()}
      //     <span
      //       style={{
      //         position: "fixed",
      //         right: 100,
      //         bottom: 50,
      //         fontSize: 30,
      //         backgroundColor: "pink",
      //         color: "green",
      //       }}
      //     >
      //       {data.text}
      //     </span>

      //   </div>
      //   <FuncComponent text={text} />
      <>
        <div ref={this.testRef}>{"测试"}</div>
        <MemoFunc text={text} />
      </>
    );
  }

  _renderContent = () => {
    const arr = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
    ];
    let hArr = [];
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      hArr.push(<h1 key={element}>{element}</h1>);
    }

    return hArr;
  };
}

export default Demo;

// 函数组件的优化
const FuncComponent = (props) => {
  // 定义状态数据
  let [num, addNum] = useState(10);

  // 生命周期方法
  useEffect((...args) => {
    //   did
    console.log("useEffect----did method:", this, args);
  });

  console.log("will method");

  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  console.log("render", "func");

  return (
    <div
      style={{
        marginLeft: 20,
        width: 100,
        height: 100,
        backgroundColor: "orange",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* {arr.map((ele, index) => {
        return <h1 key={ele + index}>{ele}</h1>;
      })}
      <span
        style={{
          position: "fixed",
          right: 100,
          bottom: 50,
          fontSize: 30,
          backgroundColor: "pink",
          color: "green",
        }}
      >
        {props.text}
      </span>*/}
      <div>{num}</div>
      <button onClick={(e) => addNum(num + 1)}>{"+"}</button>
    </div>
  );
};

const MemoFunc = memo(FuncComponent, (currentProps, newProps) => {
  return currentProps.text === newProps.text;
});
