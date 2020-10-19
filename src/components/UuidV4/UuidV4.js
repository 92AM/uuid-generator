import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function UuidV4() {
    return (
      <div className="UuidV4">
            UUID V4 : <h2>{uuidv4()}</h2>
      </div>
    );
  }

export default UuidV4;