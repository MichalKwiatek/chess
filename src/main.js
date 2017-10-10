import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ChessBoard from "./components/ChessBoard";
import store from "./store";

class App extends React.Component{
    render() {
        return (
            <ChessBoard/>
        );
    }
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
, window.document.getElementById('root'));