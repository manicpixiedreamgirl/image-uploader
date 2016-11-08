/* eslint-disable
  no-restricted-syntax,
  prefer-const,
*/
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
global.localStorage = {};
global.sessionStorage = {};

const propogate = (window) => {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;
    global[key] = window[key];
  }
};

propogate(win);
