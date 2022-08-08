
const db = require("../database/connection")

class PosicaoController {
    novaPosicao(req,res) {
        
        const{descricao} = req.body
       

        db.insert({descricao}).table('posicao').then(data=>{
            console.log(data)
            res.json({message:'feito nova Posicao!'})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarPosicaos(req,res) {
        db.select("*").table("posicao").then(Posicaos=>{
            res.json(Posicaos)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmaPosicao(req,res) {
        console.log(req.params)
        const id = req.params.id

        db.select("*").table("posicao").where({id_Posicao:id}).then(Posicaos=>{
            res.json(Posicaos)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarPosicao(req,res) {
        const id = req.params.id
        const descricao = req.body.descricao

        db.where({id_Posicao:id}).update({descricao:descricao}).table('posicao').then(Posicao=>{
            res.json({mensagem:'atualizado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerPosicao(req,res) {
        const id = req.params.id
        
        db.where({id_Posicao:id}).del().table('posicao').then(Posicao=>{
            res.json({mensagem:"removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    
}

module.exports = new PosicaoController();