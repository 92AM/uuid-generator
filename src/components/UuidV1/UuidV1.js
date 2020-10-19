import React from 'react';
import { v1 as uuidv1 } from 'uuid';

function UuidV1() {
    return (
      <div className="UuidV1">
            UUID V1 : <h2>{uuidv1()}</h2>
      </div>
    );
  }

export default UuidV1;