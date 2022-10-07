const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    let { parametro } = req.params;
    if (parametro == 1) {
      callback(null, "../imagens/imagensPerfil");
      console.log(parametro);
    }

    if (parametro == 2) {
      callback(null, "../imagens/imagensNegocios");
      console.log(parametro);
    }
  },
  filename: function (req, file, callback) {
    const sufixoUnico = Date.now() + "-" + Math.floor(Math.random() * 1e9);
    let i = file.originalname.split(".");
    callback(null, `img-perfil-${sufixoUnico}.${i[1]}`);
  },
});

function fileFilter(req, file, callback) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
    callback(null, true);
  else callback(null, false);
}

const update = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

module.exports = update;
