import React, { Component } from "react";
import '../../../src/global.css';
import { onClickCopyButton } from "../../utility/utils";

class NilUuid extends Component {
  
  render() {
    const nilUuid = "00000000-0000-0000-0000-000000000000";
    const copyButtonClassAndId = "Copy-button";

    return (
      <div className="NilUuid">
        NIL UUID : 
        <h1>
          {nilUuid}
          <button id={copyButtonClassAndId} className={copyButtonClassAndId} onClick={() => {onClickCopyButton(nilUuid, copyButtonClassAndId)}}>Copy</button>
        </h1>
      </div>
    );
  }
}

export default NilUuid;