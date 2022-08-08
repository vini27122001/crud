
const db = require("../database/connection")

class ProductController {
    novoProduto(req,res) {
       
        const{nome,id_pos,largura,altura,peso,comprimento,id_emb,bloqueio,qtd} = req.body

        db.insert({nome,id_pos,largura,altura,peso,comprimento,id_emb,bloqueio,qtd}).table('produto').then(data=>{
            console.log(data)
            res.json({message:'feito novo produto!'})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarProdutos(req,res) {
        db.select("*").table("produto").then(produtos=>{
            res.json(produtos)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmProduto(req,res) {
        console.log(req.params)
        const id = req.params.cod_barra

        db.select("*").table("produto").where({cod_barra:id}).then(produtos=>{
            res.json(produtos)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarProduto(req,res) {
        const id = req.params.cod_barra
        const bloqueio = req.body.bloqueio

        db.where({cod_barra:id}).update({bloqueio:bloqueio}).table('produto').then(usuario=>{
            res.json({mensagem:'atualizado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerProduto(req,res) {
        const id = req.params.cod_barra
        
        db.where({cod_barra:id}).del().table('produto').then(usuario=>{
            res.json({mensagem:"removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new ProductController();