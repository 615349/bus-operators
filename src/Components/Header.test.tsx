import { mount } from 'enzyme';
import Header from './Header';
import { Img } from './Header.styles';

describe('Header', () => {
  it('image should be displayed correctly in Header', () => {
    const imgComponent = mount(<Header />).find(Img);
    expect(imgComponent.exists()).toBeTruthy();
    expect(imgComponent.prop('alt')).toEqual('transport NSW logo');
  });
});
