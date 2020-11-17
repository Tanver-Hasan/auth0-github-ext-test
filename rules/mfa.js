function (user, context, callback) {
      context.multifactor = {
        provider: 'any',
        allowRememberBrowser: false
      };
  
    callback(null, user, context);
  }