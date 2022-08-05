const database = require('../database/connection');


class taskController {
    novaTarefa(nome,senha,bloqueio,data){

        console.log(nome,senha,bloqueio,data)


        database.insert({nome,senha,bloqueio,data}).table("usuario").then(data=>{
            console.log(data)
            
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUsuarios(req,res){
        database.select('*').table('usuario').then(tarefas=>{
            console.log(tarefas);
            res.json(tarefas);
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmUsuario(req,res){
        var id = req.params.id
        

        database.select('*').table('usuario').where({id_usuario:id}).then(teste=>{
           res.json(teste);
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarUsuario(res,req){
        const id = req.params.id
        const {bloqueio} = req.body

        database.where({id_usuario:id}).update({bloqueio:bloqueio}).table('usuario').then(data=>{
            res.json({mensagem:"bloqueio atualizado com sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }

    deletarUmUsuario(req,res){
        const id = req.params.id

        database.where({id_usuario:id}).del().table('usuario').then(data=>{
            res.json({mensagem:"usuario deletado com sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }

}

module.exports = new taskController();