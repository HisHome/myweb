export const ownList = state => state.ownList;
export const pageList = state => state.pageList;
export const userInfo = state => state.userInfo.roleCodes ? state.userInfo : JSON.parse(localStorage.getItem('userInfo'));
export const userRoleId = state => {
  let value;
  if (state.userInfo.roleCodes) {
    value = state.userInfo.roleCodes;
  } else if (JSON.parse(localStorage.getItem('userInfo'))) {
    value = JSON.parse(localStorage.getItem('userInfo')).roleCodes || [];
  } else {
    value = [];
  }
  return value;
};

