##載入所有指定資料夾中的Router

```javascript
//index.js
var express = require('express');
var router = express.Router();
var loader = require('express-router-loader')

loader(router, __dirname);

//TODO: 加入其他 router

module.exports = router;
```