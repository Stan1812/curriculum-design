'use strict';
exports.success = ({ ctx, res, msg = 'success' }) => {
  ctx.body = {
    code: 1,
    data: res,
    msg,
  };
  ctx.status = 200;
};
exports.failed = ({ ctx, msg = 'something wrong' }) => {
  ctx.body = {
    code: 0,
    msg,
  };
  ctx.status = 200;
};

// exports.sendres = ({ ctx, res = null, msgfail, msgsuc }) => {
//   if (res) {
//     success({ ctx, res, msgsuc });
//   } else {
//     failed({ ctx, msgfail });
//   }
// };
