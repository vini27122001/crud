
const db = require("../")

class UserController {
    novoUsuario(req,res) {
        
        const{nome,senha,bloqueio,data} = req.body[0]
        console.log()
        console.log(req.body)

        db.insert({nome,senha,bloqueio,data}).table('usuario').then(data=>{
            console.log(data)
            res.json({message:'feito novo user!'})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUsuarios(req,res) {
        db.select("*").table("usuario").then(usuarios=>{
            res.json(usuarios)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmUsuario(req,res) {
        console.log(req.params)
        const id = req.params.id

        db.select("*").table("usuario").where({id_usuario:id}).then(usuarios=>{
            res.json(usuarios)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarUsuario(req,res) {
        const id = req.params.id
        const bloqueio = req.body.bloqueio

        db.where({id_usuario:id}).update({bloqueio:bloqueio}).table('usuario').then(usuario=>{
            res.json({mensagem:'atualizado com sucesso'})
        }).catch(error=>{
            console.log(error)
        })
    }

    removerUsuario(req,res) {
        const id = req.params.id
        
        db.where({id_usuario:id}).del().table('usuario').then(usuario=>{
            res.json({mensagem:"removido com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    verificarUsuario(req,res) {
       var id= req.body.id;
       var senha = req.body.senha;
        db.select("*").table("usuario").where({id_usuario:id}).then(usuarios=>{
            console.log(usuarios[0].senha)
            console.log(senha)
            if(usuarios[0].bloqueio == 1) {
                res.json({mensagem:'usuario bloqueado'})
            }else if(usuarios[0].senha === senha) {
                console.log('to aqui')
                return res.sendFile(__dirname + '/html/pagina-controle.html')
            }
            res.json({mensagem:'senha ou usuario invalido'})
        }).catch(error=>{
            console.log(error)
        })


        
    }

    
}

module.exports = new UserController();