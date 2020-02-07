/**
 * PasienController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  cari: (req, res) => {
    let json = require('../../assets/dummy.json');
    let payload = [];
    for (let i = 0; i < json.length; i++) {
      let data = json[i];
      let namaPasien = data.pasien.nama.toLowerCase();
      let namaYgDicari = req.param('nama').toLowerCase();
      if (namaPasien.indexOf(namaYgDicari) !== -1) {
        payload.push(data);
      }
    }
    res.status(200).json({
      'success': true,
      'message': 'berhasil',
      'payload': payload
    });
  }
};
