const File = require('../models/File');
const Box = require('../models/Box');

class FileController {
  /**
   * Responsible to upload current file
   * @param {*} req
   * @param {*} res
   */
  async store(req, res) {
    const { id } = req.params;
    const box = await Box.findById(id);

    console.log(req.file);

    // Create a new file
    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key,
    });

    // Add the new file in the current box
    box.files.push(file);
    await box.save();
    console.log(box);
    return res.json(file);
  }
}

module.exports = new FileController();
