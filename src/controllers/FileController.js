const File = require('../models/File');
class FileController {
  /**
   * Responsible to upload current file
   * @param {*} req
   * @param {*} res
   */
  async store(req, res) {
    console.log('hit');
    // console.log(req.file);
    return res.send('uploading file');
  }
}

module.exports = new FileController();
