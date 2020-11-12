import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../../../src/global.css';
import { onClickCopyButton } from "../../utility/utils";

class UuidV4 extends Component {

  render() {
    const uuidV4 = uuidv4();
    const copyButtonClassAndId = "Copy-button";

    return (
      <div className="UuidV4">
        <h2>UUID V4 : </h2>
        <h1>
          {uuidV4}
          <button id={copyButtonClassAndId} className={copyButtonClassAndId} onClick={() => {onClickCopyButton(uuidV4, copyButtonClassAndId)}}>Copy</button>
        </h1>
      </div>
    );
  }
}

export default UuidV4;