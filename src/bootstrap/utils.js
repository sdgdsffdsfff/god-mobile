'use strict';
import { MessageBox } from 'mint-ui';

export const isObject = obj => {
  const OBJECT_TOSTRING = '[object Object]';
  return Object.prototype.toString.call(obj) === OBJECT_TOSTRING;
};

export const stopPolling = () => {
  if (window.timer && isObject(window.timer)) {
    Object.keys(window.timer).forEach(key => {
      clearInterval(window.timer[key]);
    });
  }
};

export const handleCommonError = (err) => {
  console.log(err);
  MessageBox.alert('出错了啦!', err);
};
