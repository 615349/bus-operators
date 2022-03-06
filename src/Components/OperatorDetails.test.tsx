import { mount } from 'enzyme';
import OperatorDetails from './OperatorDetails';
import { BackBtn } from './OperatorDetails.styles';
import { act } from 'react-dom/test-utils';
import localStorageMock from 'Utils/localStorageMock';

describe('OperatorDetails', () => {
  const onClickBack = jest.fn();

  afterEach(() => {
    onClickBack.mockRestore();
  });

  const originalLocalStorage = window.localStorage;

  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: originalLocalStorage,
    });
    window.localStorage.clear();
  });

  const props = {
    operator:{
      name: 'Sydney Buses',
      date: '25/09/2021',
      routes: [{
        id: '42612',
        routeVariant: '891 2 1',
        deviationFromTimetable: 77
      }]
    },
    localStorageKey: 'operator-0',
    onClickBack,
  }

  it('when click back button, onClickBack function should be called', () => {
    const component = mount(<OperatorDetails {...props} />);
    expect(component.find(BackBtn).exists()).toBeTruthy();

    expect(onClickBack).not.toHaveBeenCalled();
    act(() => {
      component.find('button').at(0).simulate('click')
    });
    component.update();
    expect(onClickBack).toHaveBeenCalled();
  });

  it('when routes array is empty, should display error message', () => {
    const newProps = {
      ...props,
      operator: {
        ...props.operator,
        routes: [],
      }
    };
    const component = mount(<OperatorDetails {...newProps} />);
    expect(component.find('.no-data').exists()).toBeTruthy();
  });

  it('when routeVariant is UNKNOWN, should display N.A.', () => {
    const newProps = {
      ...props,
      operator: {
        ...props.operator,
        routes: [{
          id: '62788',
          routeVariant: 'UNKNOWN',
          deviationFromTimetable: null
        }],
      }
    };
    const component = mount(<OperatorDetails {...newProps} />);
    expect(component.text()).toContain('N.A.');
  });

  it('save note', () => {
    const component = mount(<OperatorDetails {...props} />);
    act(() => {
      component.find('textarea').simulate('change', { target: { value: 'sydney bus' } });
    });
    component.update();
    expect(component.find('textarea').text()).toContain('sydney bus');

    act(() => {
      component.find('button').at(1).simulate('click');
    });
    component.update();
    expect(window.localStorage.getItem(props.localStorageKey)).toEqual('sydney bus');
  });
});
