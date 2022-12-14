# カスタマイズ記録

## このリポジトリの最初の状態

[このサイト](https://qiita.com/tat_mae084/items/745761eee6cd1d42949d)を参考にして自動デプロイの仕組みを整えました。

## TaiowindCSSの適用

Tailwindcssの[公式サイト](https://tailwindcss.com/docs/guides/create-react-app)に従い、インストールと設定を行いました。

## React Routerを適用し、複数ページを表示出来るようにする

最新バージョンの[ReactRouterの日本語解説サイト](https://ralacode.com/blog/post/how-to-use-react-router/)を参考にインストールと設定を行いました。

## 各種エラーと解決方法の検索と解決手順

### 1. ブラウザでリロードすると404エラーが発生する

|検索キーワード|react-router-dom 404エラー|[出典](https://kubogen.com/web-programing-299/)
---- | ---- | ----

【解決手順】
Routeタグのpathプロパティ値に一定の調整を加える（下記サンプルコード参照）  
※2022-12-15追記　この解決方法はローカルではOKであったが、github-Pagesでは解決できなかった。[より深い解説](https://maku.blog/p/9u8it5f/)を見つけたので、参考になる。  
抜本的な解決方法をさらに追求する必要がある。[このサイト](https://kubogen.com/web-programing-299/)の手法はシンプルであり試してみたい。

```javascript
{/*  ---------------------------------------------------
        /src/App.jsx  
        注意；'react-router-dom' version 6 必須
     ---------------------------------------------------
*/}

import ‘./App.css’;
import { BrowserRouter as Router, Routes, Route } from “react-router-dom”;
import Home from “./Pages/Home”;
import About from “./Pages/About”;
import Error from “./Pages/Error”;

const homeUrl = process.env.PUBLIC_URL;

function App() {
　　return (
　　　　<Router>
　　　　　　<Routes>
　　　　　　　　<Route path={ homeUrl } element={<Home />} />
　　　　　　　　<Route path={ homeUrl + “/about” } element={<About />} />
　　　　　　　　<Route path=”*” element={<Error />} />
　　　　　　</Routes>
　　　　</Router>
　　);
}

export default App;
```

### 2. imgタグのsrc="<i>src path</i>" しても、画像の表示ができない

|検索キーワード|react 画像 表示されない|[出典](http://shincode.info/2021/08/17/cant-display-image-with-react/)
---- | ---- | ----

【トラブル事例】

```javascript
<img src="../images/mountain.jpg" alt="" />
```

【解決事例】  
※2022-12-15追記 下記の解決事例の他にも、この[サイト](https://morioh.com/p/b61b6054e0cf)にあるように多くの手段がある。実験してみた結果は良好であった。さらに、外部ファイルを使う方法のお応用として、Wordpressのメディア管理機能を活用して外部の画像置き場として活用するというアイデアを試したが、とても快適であった。

```javascript
import React from "react";
import bgImage from "../images/mountain.jpg";　//ここでパス指定して変数として利用する

export const Title = () => {
  return (
    <div className="main-title">
      <h1>Simple Trello</h1>
      <img src={bgImage} />　　//srcに｛｝で入れ込む
    </div>
  );
};
```

### 軽微な警告

#### pタグは入れ子にできない

【事例】

 ```javascript
 // 間違い　pタグが入れ子になっている
 <p>
   <p>あれこれ</p>
 </p>
 
  //修正後
 <div>
   <p>あれこれ</p>
 </div>
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
