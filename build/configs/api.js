"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAT_GROUP = exports.WEBIM = exports.PANUPLOAD = exports.PANTOKEN = exports.PANLIST = exports.PANCHAOXING = exports.ACCOUNTMANAGE = exports.ACTIVELIST = exports.BACKCLAZZDATA = exports.COURSELIST = exports.PPTACTIVEINFO = exports.PPTSIGN = exports.PRESIGN = exports.LOGIN = exports.LOGIN_PAGE = void 0;
exports.LOGIN_PAGE = {
    URL: 'http://passport2.chaoxing.com/mlogin?fid=&newversion=true&refer=http%3A%2F%2Fi.chaoxing.com',
    METHOD: 'GET'
};
exports.LOGIN = {
    URL: 'http://passport2.chaoxing.com/fanyalogin',
    METHOD: 'POST',
};
exports.PRESIGN = {
    URL: 'https://mobilelearn.chaoxing.com/newsign/preSign',
    METHOD: 'GET'
};
exports.PPTSIGN = {
    URL: 'https://mobilelearn.chaoxing.com/pptSign/stuSignajax',
    METHOD: 'GET'
};
exports.PPTACTIVEINFO = {
    URL: 'https://mobilelearn.chaoxing.com/v2/apis/active/getPPTActiveInfo',
    METHOD: 'GET'
};
exports.COURSELIST = {
    URL: 'http://mooc1-1.chaoxing.com/visit/courselistdata',
    METHOD: 'POST'
};
exports.BACKCLAZZDATA = {
    URL: 'http://mooc1-api.chaoxing.com/mycourse/backclazzdata',
    METHOD: 'GET'
};
exports.ACTIVELIST = {
    URL: 'https://mobilelearn.chaoxing.com/v2/apis/active/student/activelist',
    METHOD: 'GET'
};
exports.ACCOUNTMANAGE = {
    URL: 'http://passport2.chaoxing.com/mooc/accountManage',
    METHOD: 'GET'
};
exports.PANCHAOXING = {
    URL: 'https://pan-yz.chaoxing.com',
    METHOD: 'GET'
};
exports.PANLIST = {
    URL: 'https://pan-yz.chaoxing.com/opt/listres',
    METHOD: 'POST'
};
exports.PANTOKEN = {
    URL: 'https://pan-yz.chaoxing.com/api/token/uservalid',
    METHOD: 'GET'
};
exports.PANUPLOAD = {
    URL: 'https://pan-yz.chaoxing.com/upload',
    METHOD: 'POST'
};
exports.WEBIM = {
    URL: 'https://im.chaoxing.com/webim/me',
    METHOD: 'GET'
};
exports.CHAT_GROUP = {
    PRESTUSIGN: {
        URL: 'https://mobilelearn.chaoxing.com/sign/preStuSign',
        METHOD: 'GET'
    },
    SIGN: {
        URL: 'https://mobilelearn.chaoxing.com/sign/stuSignajax',
        METHOD: 'GET'
    }
};
