import React, { Component } from "react";
import './App.css';
import UuidV4 from '../UuidV4/UuidV4'
import UuidV1 from '../UuidV1/UuidV1'
import NilUuid from '../NilUuid/NilUuid'
import { onClickCopyButton } from "../../utility/utils";

class App extends Component {

  constructor() {
    super();
    this.state = {
      showUuidV1: true,
      showUuidV4: false,
      showNilUuid: false
    };
    this.showUuidComponent = this.showUuidComponent.bind(this);
  }

  showUuidComponent(name) {
    switch (name) {
      case "showUuidV1":
        this.setState({ showUuidV1: true });
        this.setState({ showUuidV4: false });
        this.setState({ showNilUuid: false});
        console.log(name);
        break;
      case "showUuidV4":
        this.setState({ showUuidV1: false });
        this.setState({ showUuidV4: true });
        this.setState({ showNilUuid: false});
        console.log(name);
        break;
      case "showNilUuid":
        this.setState({ showUuidV1: false });
        this.setState({ showUuidV4: false });
        this.setState({ showNilUuid: true});
        console.log(name);
        break;
      default: break;
    }
  }

  render() {
    const { showUuidV1, showUuidV4, showNilUuid } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <h1 style={{fontSize: 100}}>UUID Generator</h1>
          <p>
            {showUuidV1 && <UuidV1 />}
            {showUuidV4 && <UuidV4 />}
            {showNilUuid && <NilUuid />}
            <div className="App-button-container">
              <button className="App-button" onClick={() => this.showUuidComponent("showUuidV1")}>
                UUID V1
              </button>
              <button className="App-button" onClick={() => this.showUuidComponent("showUuidV4")}>
                UUID V4
              </button>
              <button className="App-button" onClick={() => this.showUuidComponent("showNilUuid")}>
                NIL UUID
              </button>
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
