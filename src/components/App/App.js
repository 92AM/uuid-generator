import React, {Component} from "react";
import './App.css';
import {Uuid} from '../Uuid/Uuid'
import {UUID_NIL, UUID_V1, UUID_V4, COPY_BUTTON_CLASS_AND_ID} from "../../utility/UuidConstants";
import {resetCopyButton} from "../../utility/utils";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showUuidV1: true,
            showUuidV4: false,
            showNilUuid: false
        };
        this.showUuidComponent = this.showUuidComponent.bind(this);
    }

    showUuidComponent(name) {
        resetCopyButton(COPY_BUTTON_CLASS_AND_ID);
        switch (name) {
            case UUID_V1:
                this.setState({showUuidV1: true});
                this.setState({showUuidV4: false});
                this.setState({showNilUuid: false});
                console.log(name);
                break;
            case UUID_V4:
                this.setState({showUuidV1: false});
                this.setState({showUuidV4: true});
                this.setState({showNilUuid: false});
                console.log(name);
                break;
            case UUID_NIL:
                this.setState({showUuidV1: false});
                this.setState({showUuidV4: false});
                this.setState({showNilUuid: true});
                console.log(name);
                break;
            default:
                break;
        }
    }

    render() {
        const {showUuidV1, showUuidV4, showNilUuid} = this.state;

        const AppButtonContainer = () => {
            return (
                <div className="App-button-container">
                    <button className="App-button" onClick={() => this.showUuidComponent(UUID_V1)}>
                        UUID V1
                    </button>
                    <button className="App-button" onClick={() => this.showUuidComponent(UUID_V4)}>
                        UUID V4
                    </button>
                    <button className="App-button" onClick={() => this.showUuidComponent(UUID_NIL)}>
                        NIL UUID
                    </button>
                </div>
            );
        };

        return (
            <div className="App">
                <header className="App-header">
                    <h1  className="App-h1">UUID Generator</h1>
                    <p>
                        {showUuidV1 && <Uuid uuidType={UUID_V1}/>}
                        {showUuidV4 && <Uuid uuidType={UUID_V4}/>}
                        {showNilUuid && <Uuid uuidType={UUID_NIL}/>}
                        <AppButtonContainer/>
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
