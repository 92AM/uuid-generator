import React from "react";
import {v1 as uuidv1, v4 as uuidv4} from 'uuid';
import '../../../src/global.css';
import './Uuid.css';
import {onClickCopyButton} from "../../utility/utils";
import {UUID_NIL, UUID_V1, UUID_V4, COPY_BUTTON_CLASS_AND_ID} from "../../utility/UuidConstants";

export const Uuid = ({uuidType}) => {

    let uuidValue;
    let uuidHeaderValue;
    let className;

    switch (uuidType) {
        case UUID_V1:
            uuidValue = uuidv1();
            uuidHeaderValue = "UUID V1 : ";
            className = "UuidV1";
            break;
        case UUID_V4:
            uuidValue = uuidv4();
            uuidHeaderValue = "UUID V4 : ";
            className = "UuidV4";
            break;
        case UUID_NIL:
            uuidValue = "00000000-0000-0000-0000-000000000000";
            uuidHeaderValue = "NIL UUID : ";
            className = "NilUuid";
            break;
        default:
            uuidValue = "";
            uuidHeaderValue = "";
            className = "EmptyUuid";
            break;
    }

    return (
        <div className={className}>
            <h2 className={'Uuid-header'}>{uuidHeaderValue}</h2>
            <div className={'Uuid-wrapper'}>
                <div className={'Uuid-container'}>
                    {uuidValue}
                </div>
                <button id={COPY_BUTTON_CLASS_AND_ID} className={COPY_BUTTON_CLASS_AND_ID} onClick={() => {
                    onClickCopyButton(uuidValue, COPY_BUTTON_CLASS_AND_ID)
                }}>Copy
                </button>
            </div>
        </div>
    );
}