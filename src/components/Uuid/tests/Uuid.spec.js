import React from 'react';
import {shallow} from 'enzyme';
import {Uuid} from '../Uuid';
import {UUID_NIL, UUID_V1, UUID_V4} from "../../../utility/UuidConstants";
import {describe, it} from "@jest/globals";
import {any} from "expect";

jest.disableAutomock();

describe('Uuid tests', () => {

    let prop;

    it('should render UuidV1', () => {
        prop = UUID_V1;

        const component = shallow(<Uuid uuidType={prop}/>);

        expect(component.find('.UuidV1').length).toEqual(1);
        expect(component.find('.Uuid-header').length).toEqual(1);
        expect(component.find('.Uuid-header').text()).toEqual("UUID V1 : ");
        expect(component.find('.Uuid-container').length).toEqual(1);
        expect(component.find('.Uuid-container').text()).toEqual(any(String));
        expect(component.find('.Copy-button').length).toEqual(1);
        expect(component.find('.Copy-button').text()).toEqual("Copy");
    });

    it('should render UuidV4', () => {
        prop = UUID_V4;

        const component = shallow(<Uuid uuidType={prop}/>);

        expect(component.find('.UuidV4').length).toEqual(1);
        expect(component.find('.Uuid-header').length).toEqual(1);
        expect(component.find('.Uuid-header').text()).toEqual("UUID V4 : ");
        expect(component.find('.Uuid-container').length).toEqual(1);
        expect(component.find('.Uuid-container').text()).toEqual(any(String));
        expect(component.find('.Copy-button').length).toEqual(1);
        expect(component.find('.Copy-button').text()).toEqual("Copy");
    });

    it('should render NilUuid', () => {
        prop = UUID_NIL;

        const component = shallow(<Uuid uuidType={prop}/>);

        expect(component.find('.NilUuid').length).toEqual(1);
        expect(component.find('.Uuid-header').length).toEqual(1);
        expect(component.find('.Uuid-header').text()).toEqual("NIL UUID : ");
        expect(component.find('.Uuid-container').length).toEqual(1);
        expect(component.find('.Uuid-container').text()).toEqual("00000000-0000-0000-0000-000000000000");
        expect(component.find('.Copy-button').length).toEqual(1);
        expect(component.find('.Copy-button').text()).toEqual("Copy");
    });

    it('should render empty when unknown option is passed', () => {
        prop = "some_unknown_value";

        const component = shallow(<Uuid uuidType={prop}/>);

        expect(component.find('.EmptyUuid').length).toEqual(1);
        expect(component.find('.Uuid-header').length).toEqual(1);
        expect(component.find('.Uuid-header').text()).toEqual("");
        expect(component.find('.Uuid-container').length).toEqual(1);
        expect(component.find('.Uuid-container').text()).toEqual("");
        expect(component.find('.Copy-button').length).toEqual(1);
        expect(component.find('.Copy-button').text()).toEqual("Copy");
    });

});