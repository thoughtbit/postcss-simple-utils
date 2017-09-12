export default {
  clearfix() {
    return {
      '&:before, &:after': {
        'display': 'table',
        'content': '""',
      },
      '&:after': {
        'clear': 'both',
      },
    };
  },
  userSelect(value) {
    return {
      '-moz-user-select': value,
      '-webkit-user-select': value,
      '-ms-user-select': value,
    };
  },
};
