const Download = require('download-git-repo');
const DOWN_URL = 'lizhichengk/vue2template';

Download(DOWN_URL, 'test-download', function (err) {
  console.log(err ? 'Error' : 'Success')
})
