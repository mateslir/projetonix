var express = require("express");
var router = express.Router();
var session = require("express-session");

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);

var fabricaDeConexao = require("../../config/bdd.cjs");
var conexao = fabricaDeConexao();

var UsuarioDAL = require("../models/UsuarioDAL.cjs");
var usuarioDAL = new UsuarioDAL(conexao);

var ProdutosDAL = require("../models/ProdutosDAL.cjs");
var produtosDAL = new ProdutosDAL(conexao);

var { verificarUsuAutenticado, limparSessao, gravarUsuAutenticado,
  verificarUsuAutorizado } = require("../models/autenticador-middleware.cjs");

const multer = require('multer');
const path = require('path');
// ****************** Versão com armazenamento em diretório
// Definindo o diretório de armazenamento das imagens
var storagePasta = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './app/public/imagens/produto') // diretório de destino  
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    //renomeando o arquivo para evitar duplicidade de nomes
  }
})

var upload = multer({ storage: storagePasta });

const { body, validationResult } = require("express-validator");

router.get("/index2", function (req, res) {
  res.render("pages/index2");
});

router.get("/termos", function (req, res) {
  res.render("pages/termos");
});

router.get("/cadastro", function (req, res) {
    res.render("pages/cadastro", { listaErros: null, dadosNotificacao: null, valors: { "nome": "", "senha": "", "email": "" } });
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

router.get("/configuracao",function (req, res) {
  var autenticado = req.session.autenticado.autenticado;
  if (autenticado == null) {
    res.redirect('/login')
  }else {
    res.render("pages/configuracao", {autenticado: req.session.autenticado});

  }
});

router.get("/confirmarpedido", function (req, res) {
  res.render("pages/confirmarpedido");
});

router.get("/devolucao", function (req, res) {
    res.render("pages/devolucao");
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
    res.render("pages/login", { listaErros: null, dadosNotificacao: null, valors: { "nome": "", "senha": "", "email": "" } });
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

router.get("/editarperfil",verificarUsuAutenticado,function (req, res) {
    res.render("pages/editarperfil",{login:req.session.autenticado.login,autenticado:req.session.autenticado});
  
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
  body("user_name")
    .isLength({ min: 3, max: 50 }).withMessage("Mínimo de 3 letras e máximo de 50!"),
  body("email")
    .isEmail().withMessage("Digite um e-mail válido!"),
  body("senha")
    .isStrongPassword()
    .withMessage("A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 caractere especial e 1 número"),
  async function (req, res) {
    var dadosForm = {
      email: req.body.email,
      senha: bcrypt.hashSync(req.body.senha, salt),
      user_name: req.body.usuar,
    };
    const erros = validationResult(req);
    // if (!erros.isEmpty()) {
    //   return res.render("pages/cadastro", { listaErros: erros, dadosNotificacao: {
    //     titulo: "Erro ao cadastrar!", mensagem: "Verifique os valores digitados!", tipo: "error"
    //   }, valores: req.body })
    // }
    try {
      let insert = await usuarioDAL.create(dadosForm);
      console.log(insert);
      res.render("pages/cadastro", {
        listaErros: null, dadosNotificacao: {
          titulo: "Cadastro realizado!", mensagem: "Usuário criado com o id " + insert.insertId + "!", tipo: "success"
        }, valores: req.body
      })
    } catch (e) {
      res.render("pages/cadastro", {
        listaErros: erros, dadosNotificacao: {
          titulo: "Erro ao cadastrar!", mensagem: "Verifique os valores digitados!", tipo: "error"
        }, valores: req.body
      })
    }
  });

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
      .withMessage("O nome de usuário/e-mail esta incorreto!"),
    body("senha")
      .isStrongPassword()
      .withMessage("Verifique novamente a senha digitada!"),
  
    gravarUsuAutenticado(usuarioDAL, bcrypt),
    function (req, res) {
      const erros = validationResult(req);
      if (!erros.isEmpty()) {
        return res.render("pages/login", { listaErros: erros, dadosNotificacao: null })
      }
      if (req.session.autenticado != null) {
        res.render("pages/login", {
          listaErros: null, dadosNotificacao: {
            titulo: "Login realizado!", mensagem: "Usuário logado com sucesso", tipo: "success"
          }, valores: req.body
        })
      } else {
        res.render("pages/login", { listaErros: erros, dadosNotificacao: { titulo: "Erro ao logar!", mensagem: "Usuário e/ou senha inválidos!", tipo: "error" } })
      }
    });
  
  router.post("/publicarproduto",
  upload.single('img_produto'),
  async function (req, res) {
    const formProduto = {
      nome_produto: req.body.nome_produto,
      descricao_produto: req.body.descricao_produto,
      preco: req.body.preco,
      loja: req.body.loja,
      img_produto: req.body.img_produto,
      id_vendedor: req.session.autenticado.id
    }
    if (!req.file) {
      console.log("Falha no carregamento");
    } else {
      caminhoArquivo = "imagens/produto/" + req.file.filename;
      formProduto.img_produto = caminhoArquivo
      // console.log(req.file)
    }
    try {
      let insert = await produtosDAL.create(formProduto);
      console.log(insert);
      res.render("pages/addproduto", {
        listaErros: null, dadosNotificacao: {
          titulo: "Produto Publicado!", mensagem: "Produto publicado com o id " + insert.insertId + "!", tipo: "success"
        }, valores: req.body
      })
    } catch (e) {
      res.render("pages/addproduto", {
        listaErros: erros, dadosNotificacao: {
          titulo: "Erro ao publicar!", mensagem: "Verifique os valores digitados!", tipo: "error"
        }, valores: req.body
      })
    }
  }

)

router.get("/addproduto", function (req, res) {
  res.render("pages/addproduto", {autenticado: req.session.autenticado});
});

  router.post("/perfil", upload.single('img_perfil'),
  // body("nome")
  //   .isLength({ min: 3, max: 50 }).withMessage("Mínimo de 3 letras e máximo de 50!"),
  // body("cpf")
  //   .isLength({ min: 8, max: 30 }).withMessage("8 a 30 caracteres!"),
  // body("email")
  //   .isEmail().withMessage("Digite um e-mail válido!"),
  // body("telefone")
  //   .isLength({ min: 12, max: 13 }).withMessage("Digite um telefone válido!"),
  // verificarUsuAutorizado([1, 2, 3], "pages/login"),
  async function (req, res) {
    const erros = validationResult(req);
    console.log(erros)
    if (!erros.isEmpty()) {
      return res.render("pages/perfil", { listaErros: erros, dadosNotificacao: null, valores: req.body, autenticado: req.body.autenticado})
    }
    try {
      var dadosForm = {
        user_name: req.body.user_name,
        email: req.body.email,
        telefone: req.body.telefone,
        foto: req.body.img_perfil,
      };
      console.log("senha: " + req.body.senha)
      if (req.body.senha != "") {
        dadosForm.senha = bcrypt.hashSync(req.body.senha, salt);
      }
      if (!req.file) {
        console.log("Falha no carregamento");
      } else {
        caminhoArquivo = "imagens/produto/" + req.file.filename;
        dadosForm.foto = caminhoArquivo
      }
      console.log(dadosForm);

      let resultUpdate = await usuarioDAL.update(dadosForm, req.session.autenticado.id);
      if (!resultUpdate.isEmpty) {
        if (resultUpdate.changedRows == 1) {
          var result = await usuarioDAL.findID(req.session.autenticado.id);
          var autenticado = {
            autenticado: result[0].user_name,
            id_usuario: result[0].id_usuario,
            email: result[0].email,
            telefone: result[0].telefone,
            img_perfil: result[0].foto
          };
          req.session.autenticado = autenticado;
          var campos = {
            autenticado: result[0].user_name, email: result[0].email,
            img_perfil: result[0].foto,
            telefone: result[0].telefone, senha: ""
          }
          res.render("pages/perfil", { listaErros: null, dadosNotificacao: { titulo: "Perfil! atualizado com sucesso", mensagem: "", tipo: "success" }, autenticado: campos });
        }
      }
    } catch (e) {
      console.log(e)
      res.render("pages/perfil", { listaErros: erros, dadosNotificacao: { titulo: "Erro ao atualizar o perfil!", mensagem: "Verifique os valores digitados!", tipo: "error" }, autenticado: req.body })
    }

  });
  



  async function buscarProdutosCarrinho(req) {
    return new Promise((resolve, reject) => {
      const id_usuario = req.session.autenticado ? req.session.autenticado.id : null;
      
      if (!id_usuario) {
        // Se nenhum usuário estiver logado, resolve com uma lista vazia de produtos
        resolve([]);
      } else {
        const sql = 'SELECT id_produto_nix FROM carrinho WHERE id_usuario = ?';
        
        conexao.query(sql, [id_usuario], (err, result) => {
          if (err) {
            reject(err);
          } else {
            // Verifica se há produtos no carrinho
            if (result.length === 0) {
              // Se não houver produtos, resolve com uma lista vazia
              resolve([]);
            } else {
              const produtosCarrinho = result.map(row => row.id_produto_nix);
  
              const queryProdutos = `SELECT * FROM produto_nix WHERE id_produto_nix IN (?)`;
  
              conexao.query(queryProdutos, [produtosCarrinho], (err, resultProdutos) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(resultProdutos);
                }
              });
            }
          }
        });
      }
    });
  }
  


  router.get("/addcarrinho/:id_produto/:id", function (req, res){
    var query = conexao.query (
      "insert into carrinho set ?",
      {id_produto_nix: req.params.id_produto,
      id_usuario: req.params.id
      },
      function (error, results, fields) {
        if (error) throw error;
      }
    )
    res.redirect("/");
  })

  router.get("/excluirprodutocart/:id", function (req, res) {
    var query = conexao.query(
      "DELETE FROM carrinho WHERE ?",
      { id_produto_nix: req.params.id },
      function (error, results, fields) {
        if (error) throw error;
      }
    );
    res.redirect("/");
  });

  router.get("/produto/:id_produto_nix", async function (req, res) {
    try {
      result = await produtosDAL.findID(req.params.id_produto_nix)
      console.log(result)
      res.render("pages/abaproduto", { produtos: result, autenticado: req.session.autenticado, login: req.res.autenticado })
  
    } catch {
      res.redirect("/")
    }
  })

  router.get("/painelvendedor", verificarUsuAutorizado([2, 3], "/perfil"), async function (req, res) {
      try {
  
        let pagina = req.query.pagina == undefined ? 1 : req.query.pagina;
    
        inicio = parseInt(pagina - 1) * 10
        results = await produtosDAL.FindPage(inicio, 10);
        totReg = await produtosDAL.TotalReg();
        console.log(results)
    
        totPaginas = Math.ceil(totReg[0].total / 10);
    
        var paginador = totReg[0].total <= 10 ? null : { "pagina_atual": pagina, "total_reg": totReg[0].total, "total_paginas": totPaginas }
    
        console.log("auth --> ")
        console.log(req.session.autenticado)
        res.render("pages/painelvendedor", { produtos: results, paginador: paginador, autenticado: req.session.autenticado, login: req.res.autenticado });
      } catch (e) {
        console.log(e); // console log the error so we can see it in the console
        res.json({ erro: "Falha ao acessar dados" });
      }
  
  
    //    res.render("pages/adm", {usuarios: results, retorno: null, erros: null, autenticado: req.session.autenticado})
  });

  router.get("/excluirproduto/:id", function (req, res) {
    var query = conexao.query(
      "DELETE FROM produto_nix WHERE ?",
      { id_produto_nix: req.params.id },
      function (error, results, fields) {
        if (error) throw error;
      }
    );
    res.redirect("/");
  });
  
  
  

// Rota para renderizar a página inicial
router.get("/", verificarUsuAutenticado, async function (req, res) {
  try {
    const produtosCarrinho = await buscarProdutosCarrinho(req);

    // Lógica para buscar os produtos para exibir na página inicial
    let pagina = req.query.pagina == undefined ? 1 : req.query.pagina;
    inicio = parseInt(pagina - 1) * 10
    resultsprod = await produtosDAL.FindPage(inicio, 10);
    totReg = await produtosDAL.TotalReg();
    totPaginas = Math.ceil(totReg[0].total / 10);
    var paginador = totReg[0].total <= 10 ? null : { "pagina_atual": pagina, "total_reg": totReg[0].total, "total_paginas": totPaginas }

    res.render("pages/index", { produtos: resultsprod, paginador: paginador, autenticado: req.session.autenticado, login: req.res.autenticado, produtosCarrinho: produtosCarrinho });
  } catch (e) {
    console.log(e);
    res.json({ erro: "Falha ao acessar dados" });
  }
});


  router.get("/adm",  verificarUsuAutorizado([3], "/perfil"),async function (req, res) {
    try {
  
      let pagina = req.query.pagina == undefined ? 1 : req.query.pagina;
  
      inicio = parseInt(pagina - 1) * 5
      results = await usuarioDAL.FindPage(inicio, 5);
      totReg = await usuarioDAL.TotalReg();
      console.log(results)
  
      totPaginas = Math.ceil(totReg[0].total / 5);
  
      var paginador = totReg[0].total <= 5 ? null : { "pagina_atual": pagina, "total_reg": totReg[0].total, "total_paginas": totPaginas }
  
      console.log("auth --> ")
      console.log(req.session.autenticado)
      res.render("pages/adm", { usuarios: results, paginador: paginador, autenticado: req.session.autenticado });
    } catch (e) {
      console.log(e); // console log the error so we can see it in the console
      res.json({ erro: "Falha ao acessar dados" });
    }
  
  
    //    res.render("pages/adm", {usuarios: results, retorno: null, erros: null, autenticado: req.session.autenticado})
  });
  
  
  router.get("/sair", limparSessao, function (req, res) {
    res.redirect("/");
  });

  router.get("/excluir/:id", function (req, res) {
    var query = conexao.query(
      "DELETE FROM usuario WHERE ?",
      { id_usuario: req.params.id },
      function (error, results, fields) {
        if (error) throw error;
      }
    );
    res.redirect("/sair");
  });

module.exports = router;