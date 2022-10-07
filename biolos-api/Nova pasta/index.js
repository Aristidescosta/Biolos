//Criar servidor
const express = require("express");
const app = express();
const multer = require("./multer");
const cors = require("cors");
app.use(cors())

app.post("/user/add-photo/:parametro", multer.single("file"), async function (req, res) {
  try {
    if (req.file) {
      let img = req.file.path;
      const novaImagem = img.split(["\\"]);
      img = `${novaImagem[0]}/${novaImagem[1]}/${novaImagem[2]}/${novaImagem[3]}`;
      return res
        .status(200)
        .send({ message: "Imagm enviada com sucesso!", img });
    }
    else{
      console.log("Imagem não definida")
      return res.status(404).send({ message: "Imagem não definida" })
    }
  } catch (erro) {
    return res.status(500).send({ message: "Houve um erro: " + erro });
  }
});

app.post("/user/posts/:parametro", multer.array("files"), function (req, res) {
  try {
    if (req.files) {
      const imagens = req.files;
      return res.status(200).send({ message: "Imagens recebidas" });
    }
  } catch (erro) {
    return res.status(500).send({ error: "Houve um erro interno" });
  }
});

app.listen(3000, console.log("Servidor rodando na porta 3000"));
