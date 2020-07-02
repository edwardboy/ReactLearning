import React, { Component, createContext } from "react";

let DataContext = createContext({
  themeColor: "#3EC7B6",
  lang: "简体中文",
});

let { Provider, Consumer } = DataContext;

class Header extends Component {
  state = {
    themeColors: ["#3EC7B6", "cyan", "orange", "blue", "brown"],
    langs: [
      "简体中文",
      "Ameraican English",
      "England English",
      "Japanese",
      "Thailand",
    ],
    currentThemeColorIndex: 0,
  };

  render() {
    const { lang } = this.context;
    const { currentThemeColorIndex, themeColors, langs } = this.state;

    let currentThemeColor =
      themeColors[currentThemeColorIndex % themeColors.length];
    let currentLang = langs[currentThemeColorIndex % themeColors.length];
    console.log("currentThemeColor:" + currentThemeColor);

    return (
      <div>
        <p style={{ color: currentThemeColor }}>
          {"头部视图" + "-" + currentLang}
        </p>

        <Provider value={{ themeColor: currentThemeColor, lang: currentLang }}>
          <div
            style={{ color: currentThemeColor }}
            onClick={this.changeThemeColor}
          >
            {"切换主题"}
          </div>
        </Provider>

        <Provider value={{ themeColor: currentThemeColor, lang: currentLang }}>
          <RecycleView />
        </Provider>

        <Provider value={{ themeColor: currentThemeColor, lang: currentLang }}>
          <Demo />
        </Provider>
      </div>
    );
  }

  changeThemeColor = () => {
    const { currentThemeColorIndex } = this.state;
    this.setState({
      currentThemeColorIndex: currentThemeColorIndex + 1,
    });
  };
}

Header.contextType = DataContext;

export default Header;

let Demo = (props) => {
  return (
    <Consumer>
      {function ({ themeColor, lang }) {
        return (
          <div>
            <p style={{ color: themeColor }}>{"函数组件"}</p>
          </div>
        );
      }}
    </Consumer>
  );
};

class RecycleView extends Component {
  render() {
    return (
      <Consumer>
        {function ({ themeColor, lang }) {
          return (
            <div>
              <p style={{ color: themeColor }}>{"轮播图"}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
