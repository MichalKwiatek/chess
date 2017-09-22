import React from "react";
import { render } from "react-dom";
import ChessBoard from "./ChessBoard";

class App extends React.Component{
    render() {
        return (
            <ChessBoard/>
        );
    }
}

render(<App/>, window.document.getElementById('root'));