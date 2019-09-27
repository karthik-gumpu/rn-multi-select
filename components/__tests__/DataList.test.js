import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import DataList from '../DataList';

Enzyme.configure({ adapter: new Adapter() })

describe('DataList Tests ', function () {

    it('Default renders 10 items', () => {
        const app = shallow(<DataList />);
        expect(app.state().list.length).toBe(10);
    });

    
    it('Delete an Item', () => {
        const app = shallow(<DataList />);
        app.instance().onSelect(1);
        app.instance().onSelect(2);
        app.instance().onDelete();
        expect(app.state().list.length).toBe(8);
    });

    it('Clear all Items', () => {
        const app = shallow(<DataList />);
        app.instance().onSelect(1);
        app.instance().onSelect(2);
        app.instance().onCancel();
        expect(app.state().selectedItems.length).toBe(0);
    });

});