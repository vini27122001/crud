
const db = require("../database/connection")

class ControleController {
    novoControle(req,res) {
       
        const{id_setor,id_usuario,data_entrada,data_saida,qtd,cod_barra} = req.body

        db.insert({id_setor,id_usuario,data_entrada,data_saida,qtd,cod_barra}).table('controle').then(data=>{
            console.log(data)
            res.json({message:'feito novo controle!'})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarControles(req,res) {
        db.select("*").table("controle").then(controles=>{
            res.json(controles)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmControle(req,res) {
        console.log(req.params)
        const id = req.params.id

        db.select("*").table("controle").where({id_controle:id}).then(controles=>{
            res.json(controles)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarControle(req,res) {
        const id = req.params.id
        const qtd = req.body.qtd

        db.where({id_controle:id}).update({qtd:qtd}).table('controle').then(usuario=>{
            res.json({mensagem:'atualizado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerControle(req,res) {
        const id = req.params.id
        
        db.where({id_controle:id}).del().table('controle').then(usuario=>{
            res.json({mensagem:"removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new ControleController();