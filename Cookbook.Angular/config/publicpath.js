
const publicPath = 'cookbook';

function path(args) {
  var file = '';
  if (args != null)
  {
      file = args;
  }
  if (process.env.ENV === 'production') {
    return '/' + publicPath + '/' + file;
  } else {
    return 'http://localhost:8080/' + publicPath + '/' + file;
  }
}

exports.path = path;
