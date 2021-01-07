import React from "react";
import W_TH from "./WithWebWorker";
import WO_TH from "./WithoutWebWorker";

class App extends React.PureComponent {
  state = {
    UI: "",
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ UI: "UN_THREADED" });
          }}
        >
          Without WebWorker
        </button>
        <button
          onClick={() => {
            this.setState({ UI: "THREADED" });
          }}
        >
          With WebWorker
        </button>
        <div>
          {this.state.UI === "UN_THREADED" ? <WO_TH /> : null}
          {this.state.UI === "THREADED" ? <W_TH /> : null}
        </div>
      </>
    );
  }
}

export default App;
