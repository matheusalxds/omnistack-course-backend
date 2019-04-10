const Box = require('../models/Box');
class BoxController {
  async store(req, res) {
    const { title } = req.body;
    const box = await Box.create({ title });
    return res.json(box);
  }
}

module.exports = new BoxController();
