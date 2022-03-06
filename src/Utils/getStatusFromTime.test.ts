import getStatusFromTime from "./getStatusFromTime";

describe('getStatusFromTime', () => {
  it('when time is null, should return unknown', () => {
    const { label, className } = getStatusFromTime(null);
    expect(label).toEqual('Unknown');
    expect(className).toEqual('unknown');
  });

  it('when time is zero, should return on time', () => {
    const { label, className } = getStatusFromTime(0);
    expect(label).toEqual('On Time');
    expect(className).toEqual('on-time');
  });

  it('when time is negative, should return early', () => {
    const { label, className } = getStatusFromTime(-3);
    expect(label).toEqual('Early');
    expect(className).toEqual('early');
  });

  it('when time is positive, should return late', () => {
    const { label, className } = getStatusFromTime(5);
    expect(label).toEqual('Late');
    expect(className).toEqual('late');
  });
});
