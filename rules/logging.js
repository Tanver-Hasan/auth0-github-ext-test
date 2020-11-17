function (user, context, callback) {
  
    console.log(JSON.stringify(context.request.query));
    callback(null, user, context);
}