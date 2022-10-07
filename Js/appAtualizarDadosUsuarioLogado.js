function recuperarDadosParaAtualizar() {
  const biolosBD = JSON.parse(localStorage.getItem("biolosBD"));
  const usuarioLogadoBD = JSON.parse(localStorage.getItem("usuarioLogadoBD"));
  const listaCaracterEspecias = [
    "»",
    "«",
    "ª",
    "º",
    ".",
    "/",
    "<",
    ">",
    "?",
    ";",
    ":",
    '"',
    "[",
    "]",
    "{",
    "}",
    "|",
    "=",
    "+",
    "-",
    "_",
    ")",
    "(",
    "*",
    "&",
    "^",
    "%",
    "$",
    "#",
    "@",
    "!",
    "`",
    "~",
  ];
  const listaDeTerminoEmais = [
    "@gmail.com",
    "@hotmail.com",
    "@yahoo.com",
    "@outlook.com",
    "@live.com",
  ];
  const iniciasContatos = [91, 92, 93, 94, 95, 99];
  const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /* const inputNovoNomeUsuario = document.querySelector('')
    const labelNovoNomeUsuario = document.querySelector('')

    const inputNovoApelidoUsuario = document.querySelector('')
    const labelNovoApelidoUsuario = document.querySelector('')

    
     */

  const inputNovoEmailUsuario = document.querySelector(
    "#inputNovoEmailUsuario"
  );
  const labelNovoEmailUsuario = document.querySelector(
    "#labelNovoEmailUsuario"
  );
  const btnNovoEmailUsuario = document.querySelector("#btnNovoEmailUsuario");
  let estadoNovoEmailUsuario = false;

  inputNovoEmailUsuario.addEventListener("keyup", () => {
    let iniciasEmail = inputNovoEmailUsuario.value.slice(0, 4);
    let encontarNumeroEmail = false;
    for (let cadaLetra in iniciasEmail) {
      listaNumeros.filter((cadaNumero) => {
        if (iniciasEmail[cadaLetra] == cadaNumero) {
          encontarNumeroEmail = true;
        }
      });
    }
    let encontrarTerminalEmail = false;
    listaDeTerminoEmais.filter((cadaTerminal) => {
      if (inputNovoEmailUsuario.value.includes(cadaTerminal)) {
        encontrarTerminalEmail = true;
      }
    });

    let parteSecundariaEmail;
    let caracterEspeciasNoemail = false;
    let posicaoAlvo = inputNovoEmailUsuario.value.indexOf("@");
    if (posicaoAlvo > 0) {
      parteSecundariaEmail = inputNovoEmailUsuario.value.slice(0, posicaoAlvo);

      for (let cadaLetraEmail in parteSecundariaEmail) {
        listaCaracterEspecias.filter((cadaValor) => {
          if (
            parteSecundariaEmail[cadaLetraEmail] === cadaValor ||
            parteSecundariaEmail[cadaLetraEmail] === ","
          ) {
            caracterEspeciasNoemail = true;
          }
        });
      }
    }

    if (
      encontarNumeroEmail ||
      inputNovoEmailUsuario.value.length < 4 ||
      !encontrarTerminalEmail ||
      caracterEspeciasNoemail
    ) {
      labelNovoEmailUsuario.innerHTML = "Email invalido !";
      labelNovoEmailUsuario.setAttribute("style", "color: #ea1d2c");
      inputNovoEmailUsuario.setAttribute("style", "border: 1px solid #ea1d2c");
      estadoNovoEmailUsuario = false;
    } else {
      labelNovoEmailUsuario.innerHTML = "Email valido !";
      labelNovoEmailUsuario.setAttribute("style", "color: green");
      inputNovoEmailUsuario.setAttribute("style", "border: 1px solid green");
      estadoNovoEmailUsuario = true;
    }

    if (inputNovoEmailUsuario.value === "") {
      labelNovoEmailUsuario.innerHTML = "Atualiza seu email";
      labelNovoEmailUsuario.setAttribute("style", "color: #8e8e8e");
      inputNovoEmailUsuario.setAttribute("style", "border: none");
      estadoNovoEmailUsuario = false;
    }
  });

  btnNovoEmailUsuario.addEventListener("click", () => {
    if (estadoNovoEmailUsuario) {
      usuarioLogadoBD[0].Contatos.Email = inputNovoEmailUsuario.value;
      localStorage.setItem("usuarioLogadoBD", JSON.stringify(usuarioLogadoBD));
      biolosBD[usuarioLogadoBD[0].id] = usuarioLogadoBD[0];
      localStorage.setItem("biolosBD", JSON.stringify(biolosBD));
    }
  });

  const btnCarregarImgPerfil = document.querySelector(".carrega_img");
  const btnSalvarNovaImgPerfil = document.querySelector("#salvarNovaImgPerfil");
  let espacoTestarImgPefil = document.querySelector("#espacoTestarImgPefil");
  let inputNovaFotoUsuario;
  btnCarregarImgPerfil.addEventListener("change", () => {
    inputNovaFotoUsuario = document.querySelector("#buscaImgPerfil").files[0];
    let caminhoImg = URL.createObjectURL(inputNovaFotoUsuario);
    espacoTestarImgPefil.src = caminhoImg;
  });

  btnSalvarNovaImgPerfil.addEventListener("click", async () => {
    console.log("Cliquei");
    let formData = new FormData();
    formData.append("file", inputNovaFotoUsuario);
    let pedido = await fetch("http://192.168.131.2:3000/user/add-photo/1", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        undefined: "multipart/form-data",
      },
    });

    await pedido
      .json()
      .then((response) => {
        usuarioLogadoBD[0].Imagem_de_perfil = response.img;
        localStorage.setItem(
          "usuarioLogadoBD",
          JSON.stringify(usuarioLogadoBD)
        );
        window.location.reload();
      })
      .catch((err) => console.log("erro: " + err));
    // usuarioLogadoBD[0].Imagem_de_perfil = espacoTestarImgPefil.src;

    //
  });

  const inputNovoContatoUsuario = document.querySelector("#inputNovoNumero");
  const labelNovoContatoUsuario = document.querySelector("#labelNovoNumero");
  const btnAtualizarNunmero = document.querySelector("#btnAtualizarNunmero");
  let estadoNovocontato = false;

  const inputNovoGpsUsuario = document.querySelector("#inputNovoGpsUsuario");
  const labelNovoGpsUsuario = document.querySelector("#labelNovoGpsUsuario");
  const btnNovoGpsUsuario = document.querySelector("#btnNovoGpsUsuario");
  let estadoNovoGpsUsuario = false;

  const inputNovoDescricaoUsuario = document.querySelector("#CaixaDescricao");
  const labelNovoDescricaoUsuario = document.querySelector("#labelDescricao");
  const btnSalvarNovaDescricao = document.querySelector(
    "#btnSalvarNovaDescricao"
  );
  let estadoNovaDEscricao = false;

  const inputNovaDataNascimentoUsuario = document.querySelector(
    "#inputNovaDataNascimentoUsuario"
  );
  const btnNovaDataNascimentoUsuario = document.querySelector(
    "#btnNovaDataNascimentoUsuario"
  );
  let estadoNovaDataNascimentoUsuario = false;

  inputNovoGpsUsuario.addEventListener("keyup", () => {
    let caracterEncontrados = false;

    for (let cadaLetra in inputNovoGpsUsuario.value) {
      listaCaracterEspecias.filter((cadaCaracter) => {
        if (inputNovoGpsUsuario.value[cadaLetra] == cadaCaracter) {
          caracterEncontrados = true;
        }
      });
    }

    if (
      inputNovoGpsUsuario.value.length < 2 ||
      inputNovoGpsUsuario.value.length > 20 ||
      caracterEncontrados
    ) {
      labelNovoGpsUsuario.innerHTML = "Localização invalido!";
      labelNovoGpsUsuario.setAttribute("style", "color: #ea1d2c");
      inputNovoGpsUsuario.setAttribute("style", "border: 1px solid #ea1d2c");
      estadoNovoGpsUsuario = false;
    } else {
      labelNovoGpsUsuario.innerHTML = "Localização Valido !";
      labelNovoGpsUsuario.setAttribute("style", "color: green");
      inputNovoGpsUsuario.setAttribute("style", "border: 1px solid green");
      estadoNovoGpsUsuario = true;
    }

    if (inputNovoGpsUsuario.value === "") {
      labelNovoGpsUsuario.innerHTML = "Atualiza a localização";
      labelNovoGpsUsuario.setAttribute("style", "color: #8e8e8e");
      inputNovoGpsUsuario.setAttribute("style", "border: none");
      estadoNovoGpsUsuario = false;
    }
  });

  btnNovoGpsUsuario.addEventListener("click", () => {
    if (estadoNovoGpsUsuario) {
      usuarioLogadoBD[0].Gps = inputNovoGpsUsuario.value;
      localStorage.setItem("usuarioLogadoBD", JSON.stringify(usuarioLogadoBD));
      biolosBD[usuarioLogadoBD[0].id] = usuarioLogadoBD[0];
      localStorage.setItem("biolosBD", JSON.stringify(biolosBD));
    }
  });

  inputNovaDataNascimentoUsuario.addEventListener("keyup", () => {
    if (
      Number(inputNovaDataNascimentoUsuario.value.slice(0, 4)) >= 2005 &&
      Number(inputNovaDataNascimentoUsuario.value.slice(0, 4)) <= 2022
    ) {
      inputNovaDataNascimentoUsuario.setAttribute(
        "style",
        "border: 1px solid #ea1d2c"
      );
      estadoNovaDataNascimentoUsuario = false;
    } else {
      inputNovaDataNascimentoUsuario.setAttribute(
        "style",
        "border: 1px solid green"
      );
      estadoNovaDataNascimentoUsuario = true;
    }
  });

  btnNovaDataNascimentoUsuario.addEventListener("click", () => {
    if (estadoNovaDataNascimentoUsuario) {
      usuarioLogadoBD[0].Data_de_nescimento =
        inputNovaDataNascimentoUsuario.value;
      localStorage.setItem("usuarioLogadoBD", JSON.stringify(usuarioLogadoBD));
      biolosBD[usuarioLogadoBD[0].id] = usuarioLogadoBD[0];
      localStorage.setItem("biolosBD", JSON.stringify(biolosBD));
    }
  });

  inputNovoDescricaoUsuario.addEventListener("keyup", () => {
    if (inputNovoDescricaoUsuario.value.length < 10) {
      labelNovoDescricaoUsuario.innerHTML = "Descrição invalido !";
      labelNovoDescricaoUsuario.setAttribute("style", "color: #ea1d2c");
      inputNovoDescricaoUsuario.setAttribute(
        "style",
        "border: 1px solid #ea1d2c"
      );
      estadoNovaDEscricao = false;
    } else {
      labelNovoDescricaoUsuario.innerHTML = "Descrição valido !";
      labelNovoDescricaoUsuario.setAttribute("style", "color: green");
      inputNovoDescricaoUsuario.setAttribute(
        "style",
        "border: 1px solid green"
      );
      estadoNovaDEscricao = true;
    }

    if (inputNovoDescricaoUsuario.value === "") {
      labelNovoDescricaoUsuario.innerHTML = "Decreve mas sobre te !";
      labelNovoDescricaoUsuario.setAttribute("style", "color: #8e8e8e");
      inputNovoDescricaoUsuario.setAttribute("style", "border: none");
      estadoNovaDEscricao = false;
    }
  });

  btnSalvarNovaDescricao.addEventListener("click", () => {
    if (estadoNovaDEscricao) {
      usuarioLogadoBD[0].Descricao = inputNovoDescricaoUsuario.value;
      localStorage.setItem("usuarioLogadoBD", JSON.stringify(usuarioLogadoBD));
      biolosBD[usuarioLogadoBD[0].id] = usuarioLogadoBD[0];
      localStorage.setItem("biolosBD", JSON.stringify(biolosBD));
    }
  });

  inputNovoContatoUsuario.addEventListener("keyup", () => {
    if (
      inputNovoContatoUsuario.value.length < 9 ||
      inputNovoContatoUsuario.value.length > 9 ||
      !iniciasContatos.includes(
        Number(inputNovoContatoUsuario.value.slice(0, 2))
      )
    ) {
      labelNovoContatoUsuario.innerHTML = "Novo contato invalido!";
      labelNovoContatoUsuario.setAttribute("style", "color: #ea1d2c");
      inputNovoContatoUsuario.setAttribute(
        "style",
        "border: 1px solid #ea1d2c"
      );
      estadoNovocontato = false;
    } else {
      labelNovoContatoUsuario.innerHTML = "Novo contato valido !";
      labelNovoContatoUsuario.setAttribute("style", "color: green");
      inputNovoContatoUsuario.setAttribute("style", "border: 1px solid green");
      estadoNovocontato = true;
    }

    if (inputNovoContatoUsuario.value === "") {
      labelNovoContatoUsuario.innerHTML = "Atualza seu contato";
      labelNovoContatoUsuario.setAttribute("style", "color: #8e8e8e");
      inputNovoContatoUsuario.setAttribute("style", "border: none");
      estadoNovocontato = false;
    }
  });

  btnAtualizarNunmero.addEventListener("click", () => {
    let encontrarNumero;
    biolosBD.filter((cadaUsuario) => {
      encontrarNumero =
        cadaUsuario.Contatos.Telefone == inputNovoContatoUsuario.value
          ? "true"
          : "false";
    });

    if (encontrarNumero === true) {
      labelNovoContatoUsuario.innerHTML = "Novo contato indisponivel !";
      labelNovoContatoUsuario.setAttribute("style", "color: #ea1d2c");
      inputNovoContatoUsuario.setAttribute(
        "style",
        "border: 1px solid #ea1d2c"
      );
      estadoNovocontato = false;
    } else {
      labelNovoContatoUsuario.innerHTML = "Novo contato disponivel !";
      labelNovoContatoUsuario.setAttribute("style", "color: green");
      inputNovoContatoUsuario.setAttribute("style", "border: green");
      estadoNovocontato = true;
    }
    if (estadoNovocontato) {
      usuarioLogadoBD[0].Contatos.Telefone = inputNovoContatoUsuario.value;
      localStorage.setItem("usuarioLogadoBD", JSON.stringify(usuarioLogadoBD));
      biolosBD[usuarioLogadoBD[0].id] = usuarioLogadoBD[0];
      localStorage.setItem("biolosBD", JSON.stringify(biolosBD));

      // biolosBD[usuarioLogadoBD[0].id].Contatos.Telefone = inputNovoContatoUsuario.value;
    }
  });
}
