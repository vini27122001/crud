const connection = require('../database/connection');
const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const embalagemController = require("../controllers/embalagemController")
const posicaoController = require("../controllers/posicaoController")
const setorController = require("../controllers/setorController")
const controleController = require("../controllers/ControleController")


router.post('/entrar',userController.verificarUsuario)


router.post('/novoUsuario',userController.novoUsuario)

router.get('/usuarios',userController.listarUsuarios)

router.get('/usuarios/:id',userController.listarUmUsuario)

router.put('/atualizar/usuarios/:id',userController.atualizarUsuario)

router.delete('/delete/usuarios/:id',userController.removerUsuario)


router.post('/novoProdutos',productController.novoProduto)

router.get('/produtos',productController.listarProdutos)

router.get('/atualizar/:cod_barra',productController.listarUmProduto)

router.put('/atualizar/atualizar/:cod_barra',productController.atualizarProduto)

router.delete('/delete/produtos/:cod_barra',productController.removerProduto)


router.post('/novaEmbalagem',embalagemController.novaEmbalagem)

router.get('/embalagems',embalagemController.listarEmbalagems)

router.get('/embalagem/:id',embalagemController.listarUmaEmbalagem)

router.put('/atualizar/embalagem/:id',embalagemController.atualizarEmbalagem)

router.delete('/delete/embalagem/:id',embalagemController.removerEmbalagem)



router.post('/novaPosicao',posicaoController.novaPosicao)

router.get('/posicaos',posicaoController.listarPosicaos)

router.get('/posicaos/:id',posicaoController.listarUmaPosicao)

router.put('/atualizar/posicao/:id',posicaoController.atualizarPosicao)

router.delete('/delete/posicao/:id',posicaoController.removerPosicao)


router.post('/novoSetor',setorController.novoSetor)

router.get('/setors',setorController.listarSsetors)

router.get('/setors/:id',setorController.listarUmoSetor)

router.put('/atualizar/setor/:id',setorController.atualizarSetor)

router.delete('/delete/setor/:id',setorController.removerSetor)


router.post('/novoControle',controleController.novoControle)

router.get('/controles',controleController.listarControles)

router.get('/controles/:id',controleController.listarUmControle)

router.put('/atualizar/controle/:id',controleController.atualizarControle)

router.delete('/delete/controle/:id',controleController.removerControle)


module.exports = router;