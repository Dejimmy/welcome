// CSS
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./lib/cover.css');
require('./lib/ie10-viewport-bug-workaround.css');

// JS
require('../node_modules/bootstrap/dist/js/bootstrap.min');
require('./lib/ie8-responsive-file-warning');
require('./lib/ie10-viewport-bug-workaround');

// HTML TODO: ひとまずそのまま。しんどくなったらテンプレートエンジン等導入
require("file-loader?name=html/[name].[ext]!./index.html");
