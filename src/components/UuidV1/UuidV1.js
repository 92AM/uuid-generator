import React, { Component } from "react";
import { v1 as uuidv1 } from 'uuid';
import '../../../src/global.css';
import { onClickCopyButton } from "../../utility/utils";

class UuidV1 extends Component {

  render() {
    const uuidV1 = uuidv1();
    const copyButtonClassAndId = "Copy-button";
    return (
      <div className="UuidV1">
        UUID V1 : 
        <h1>
          {uuidV1}
          <button id={copyButtonClassAndId} className={copyButtonClassAndId} onClick={() => {onClickCopyButton(uuidV1, copyButtonClassAndId)}}>Copy</button>
        </h1>
      </div>
    );
  }
}

export default UuidV1;