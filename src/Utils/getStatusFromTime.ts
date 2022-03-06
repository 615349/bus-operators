/**
 * return an object with label and className fields
 * label is used to display On Time / Late / Early / Unknown
 * className is used to show different colours
 */

const getStatusFromTime = (time: number | null) => {
  if (typeof time !== 'number') {
    return {
      label: 'Unknown',
      className: 'unknown',
    }
  } else if (time === 0) {
    return {
      label: 'On Time',
      className: 'on-time',
    }
  } else if (time < 0) {
    return {
      label: 'Early',
      className: 'early',
    }
  }
  return {
    label: 'Late',
    className: 'late',
  }
};

export default getStatusFromTime;
