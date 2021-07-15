import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./components/HelloWorld";

function App(){
    return(
        <div>
            <HelloWorld firstName="kim" lastName = "siwong"/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))