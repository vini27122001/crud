
const db = require("../database/connection")

class SetorController {
    novoSetor(req,res) {
        
        const{nome} = req.body
       

        db.insert({nome}).table('setor').then(data=>{
            console.log(data)
            res.json({message:'feito nova setor!'})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarSsetors(req,res) {
        db.select("*").table("setor").then(setors=>{
            res.json(setors)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmoSetor(req,res) {
        console.log(req.params)
        const id = req.params.id

        db.select("*").table("setor").where({id_setor:id}).then(setors=>{
            res.json(setors)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarSetor(req,res) {
        const id = req.params.id
        const nome = req.body.nome

        db.where({id_setor:id}).update({nome:nome}).table('setor').then(setor=>{
            res.json({mensagem:'atualizado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerSetor(req,res) {
        const id = req.params.id
        
        db.where({id_setor:id}).del().table('setor').then(setor=>{
            res.json({mensagem:"removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    
}

module.exports = new SetorController();