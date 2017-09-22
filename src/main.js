import React from "react";
import { render } from "react-dom";

class App extends React.Component{
    render() {
        return (
            <div>
                here chessboard
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('root'));