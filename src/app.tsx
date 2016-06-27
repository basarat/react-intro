import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactDOMServer from 'react-dom/server';


const rendered = <div>Hello World</div>

// Render to DOM
ReactDOM.render(
    rendered,
    document.getElementById("root")
);
