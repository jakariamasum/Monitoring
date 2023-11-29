const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedReq = ['get', "post", "put", "delete"];
    if (acceptedReq.indexOf(requestProperties.method) > -1) {
        handler._user[requestProperties.method](requestProperties, callback);
    }
    else {
        callback(405)
    }
};

handler._user = {};
handler._user.get = (requestProperties, callback) => {
    callback(200)
};
handler._user.post = (requestProperties, callback) => { };
handler._user.put = (requestProperties, callback) => { };
handler._user.delete = (requestProperties, callback) => { };


module.exports = handler;