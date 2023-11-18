var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);
var session = require("express-session");

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);

var fabricaDeConexao = require("../../config/bdd.cjs");
var conexao = fabricaDeConexao();

var UsuarioDAL = require("../models/UsuarioDAL.cjs");
var usuarioDAL = new UsuarioDAL(conexao);

var { verificarUsuAutenticado, limparSessao, gravarUsuAutenticado,
  verificarUsuAutorizado } = require("../models/autenticador-middleware.cjs");

const multer = require('multer');
const path = require('path');
// ****************** Versão com armazenamento em diretório
// Definindo o diretório de armazenamento das imagens
var storagePasta = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './app/public/imagens/Group 9 (1).png/') // diretório de destino  
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    //renomeando o arquivo para evitar duplicidade de nomes
  }
})

var upload = multer({ storage: storagePasta });

const { body, validationResult } = require("express-validator");
router.get("/", function (req, res) {
    res.render("pages/index");
});

router.get("/index2", function (req, res) {
  res.render("pages/index2");
});

router.get("/termos", function (req, res) {
  res.render("pages/termos");
});

router.get("/cadastro", function (req, res) {
    res.render("pages/cadastro");
});

router.get("/abaproduto", function (req, res) {
  res.render("pages/abaproduto");
});

router.get("/abaproduto1", function (req, res) {
  res.render("pages/abaproduto1");
});

router.get("/abaproduto2", function (req, res) {
  res.render("pages/abaproduto2");
});

router.get("/abaproduto3", function (req, res) {
  res.render("pages/abaproduto3");
});

router.get("/abaproduto4", function (req, res) {
  res.render("pages/abaproduto4");
});

router.get("/abaproduto5", function (req, res) {
  res.render("pages/abaproduto5");
});

router.get("/abaproduto6", function (req, res) {
  res.render("pages/abaproduto6");
});

router.get("/abaproduto7", function (req, res) {
  res.render("pages/abaproduto7");
});

router.get("/abaproduto8", function (req, res) {
  res.render("pages/abaproduto8");
});

router.get("/abaproduto9", function (req, res) {
  res.render("pages/abaproduto9");
});

router.get("/abaproduto10", function (req, res) {
  res.render("pages/abaproduto10");
});

router.get("/abaproduto11", function (req, res) {
  res.render("pages/abaproduto11");
});

router.get("/adccartao", function (req, res) {
    res.render("pages/adccartao");
});

router.get("/adcendereco", function (req, res) {
  res.render("pages/adcendereco");
});

router.get("/carrinho", function (req, res) {
    res.render("pages/carrinho");
});

router.get("/cartoes", function (req, res) {
    res.render("pages/cartoes");
});

router.get("/centralajuda", function (req, res) {
    res.render("pages/centralajuda");
});

router.get("/configuracao", function (req, res) {
    res.render("pages/configuracao");
});

router.get("/confirmarpedido", function (req, res) {
  res.render("pages/confirmarpedido");
});

router.get("/devolucao", function (req, res) {
    res.render("pages/devolucao");
});

router.get("/editarperfil", function (req, res) {
  res.render("pages/editarperfil");
});

router.get("/enderecos", function (req, res) {
    res.render("pages/enderecos");
});

router.get("/enviados", function (req, res) {
    res.render("pages/enviados");
});

router.get("/erropesquisa", function (req, res) {
    res.render("pages/erropesquisa");
});

router.get("/finalização", function (req, res) {
    res.render("pages/finalização");
});

router.get("/formendereco", function (req, res) {
    res.render("pages/formendereco");
});

router.get("/garantia", function (req, res) {
    res.render("pages/garantia");
});

router.get("/login", function (req, res) {
    res.render("pages/login");
});

router.get("/metodosdepaga", function (req, res) {
    res.render("pages/metodosdepaga");
});

router.get("/minhaloja", function (req, res) {
    res.render("pages/minhaloja");
});

router.get("/ouvidoria", function (req, res) {
    res.render("pages/ouvidoria");
});

router.get("/pedidoconfirmado", function (req, res) {
  res.render("pages/pedidoconfirmado");
});

router.get("/perfil",verificarUsuAutenticado, function (req, res) {
  if (req.session.autenticado.autenticado == null){
    res.redirect("/login")
  }else{
    res.render("pages/perfil",{login:req.session.autenticado.login, autenticado:req.session.autenticado});
  }
  
});

router.get("/preparos", function (req, res) {
    res.render("pages/preparos");
});

router.get("/produtos", function (req, res) {
    res.render("pages/produtos");
});

router.get("/produtos", function (req, res) {
  res.render("pages/produtos");
});

router.get("/resultados", function (req, res) {
  res.render("pages/resultados");
});

router.get("/saque", function (req, res) {
  res.render("pages/saque");
});

router.get("/saqueconfir", function (req, res) {
  res.render("pages/saqueconfir");
});

router.get("/trocarcartao", function (req, res) {
  res.render("pages/trocarcartao");
});

router.get("/privacidade", function (req, res) {
  res.render("pages/privacidade");
});

router.get("/sobre", function (req, res) {
  res.render("pages/sobre");
});

router.get("/sucesso", function (req, res) {
  res.render("pages/sucesso");
});

router.get("/vendernanix2", function (req, res) {
    res.render("pages/vendernanix2");
});

router.post("/cadastro",

body("email").isEmail().withMessage("Digite um e-mail válido!"),
body("usuar").isLength({ min: 8, max: 30 }).withMessage("Nome de usuário deve ter de 8 a 30 caracteres!"),
body("senha").isStrongPassword().withMessage("A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 caractere especial e 1 número"),

function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    // return res.render("pages/html", { erros: errors, dados: req.body });
  }

  var dadosForm = {
    email: req.body.email,
    senha: bcrypt.hashSync(req.body.senha, salt),
    user_name: req.body.usuar,
    telefone: "vazio",
    foto: "vazio"
};

  conexao.query(
    "INSERT INTO usuario SET ?",
    dadosForm,
    function (error, results, fields) {
      if (error) throw error;
      // Neat!
    }
  );

  res.redirect("/");
})

router.post("/formendereco",

body("ceep").isLength(),
body("estado").isLength(),
body("cidade").isLength(),
body("bairro").isLength(),
body("ruanumero").isLength(),
body("complemento").isLength(), 

function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    // return res.render("pages/html", { erros: errors, dados: req.body });
    return res.json(errors);
  }

  var dadosForm = {
    cep: req.body.ceep,
    estado: req.body.estado,
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    rua_numero: req.body.ruanumero,
    complemento: req.body.complemento

};
  console.log(dadosForm)
  conexao.query(
    "INSERT INTO endereco SET ?",
    dadosForm,
    function (error, results, fields) {
      if (error) throw error;
      // Neat!
    }
  );

  res.redirect("/");
})
  
router.post(
  "/login",
  body("email")
    .isLength({ min: 4, max: 45 })
    .withMessage("O nome de usuário/e-mail deve ter de 8 a 45 caracteres"),
  body("senha").isStrongPassword()
    .withMessage("A senha deve ter no mínimo 8 caracteres (mínimo 1 letra maiúscula, 1 caractere especial e 1 número)"),

  gravarUsuAutenticado(usuarioDAL, bcrypt),
  function (req, res) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      console.log(erros);
      return res.render("pages/login", { listaErros: erros, dadosNotificacao: null })
    }
    console.log(req.session);
    if (req.session.autenticado != null) {

      //mudar para página de perfil quando existir
      console.log(`Logado com sucesso`)
      res.redirect("/perfil");
    } else {
      res.render("pages/login", { listaErros: erros})
    }

  });
  
  

  router.get("/", verificarUsuAutenticado, function (req, res) {
    res.render("pages/index", req.session.autenticado);
  });
  
  router.get("/sair", limparSessao, function (req, res) {
    res.redirect("/");
  });

module.exports = router;