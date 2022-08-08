
const db = require("../database/connection")

class EmbalagemController {
    novaEmbalagem(req,res) {
        
        const{tipo_embalagem} = req.body
       

        db.insert({tipo_embalagem}).table('embalagem').then(data=>{
            console.log(data)
            res.json({message:'feito nova embalagem!'})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarEmbalagems(req,res) {
        db.select("*").table("embalagem").then(embalagems=>{
            res.json(embalagems)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmaEmbalagem(req,res) {
        console.log(req.params)
        const id = req.params.id

        db.select("*").table("embalagem").where({id_embalagem:id}).then(embalagems=>{
            res.json(embalagems)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarEmbalagem(req,res) {
        const id = req.params.id
        const tipo_embalagem = req.body.tipo_embalagem

        db.where({id_embalagem:id}).update({tipo_embalagem:tipo_embalagem}).table('embalagem').then(embalagem=>{
            res.json({mensagem:'atualizado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerEmbalagem(req,res) {
        const id = req.params.id
        
        db.where({id_embalagem:id}).del().table('embalagem').then(embalagem=>{
            res.json({mensagem:"removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    
}

module.exports = new EmbalagemController();