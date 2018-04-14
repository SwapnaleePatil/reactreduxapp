import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../login'
import {MemoryRouter} from 'react-router-dom'

Enzyme.configure({adapter: new Adapter()});
const props = {
    credentials: {
        email: "",
        password: ""
    },
    login: jest.fn(),
    history:{
        push:jest.fn()
    }
};
describe('Login component', () => {
    let component, inst;
    beforeEach(() => {
        component = mount(<MemoryRouter><Login {...props} /></MemoryRouter>).find('Login');
        inst = component.instance();
    });

    it('component should render', () => {
        console.log(component.html());
        const expectedHtml = '<div class="login-wrapper"><h2 align="center">Login</h2><span></span><input name="email" placeholder="Username" type="text" class="form-control"><br><input name="password" placeholder="password" type="text" class="form-control"><br><br><button id="loginBtn" type="button" class="btn btn-success">Login</button><br><br><a aria-current="false" href="/registration">Register for new Account</a></div>';
        expect(component.html()).toEqual(expectedHtml);
    });

    it('should render Login', () => {
        const loginWrapper = component.find('.login-wrapper');
        expect(loginWrapper.length).toBe(1);
        const loginButton = component.find('button #loginBtn');
        expect(loginButton.length).toBe(1);
        loginButton.simulate('click');
        expect(inst.login).toHaveBeenCalled();
        expect(props.history.push).toHaveBeenCalled('/main');
    });
});