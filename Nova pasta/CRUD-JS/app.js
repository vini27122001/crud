const express = require('express');
const cors = require('cors');
const router = require('./src/routes/routes');
const hbs = require('express-handlebars');
const session = require('express-session');
const taskController = require('./src/controllers/taskController');
const bodyParser = require('body-parser');

const app = express();

//CONFIGURAÇÃO HANDLEBARS
app.engine('hbs',hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine','hbs');
////////FIM CONFIG HBS////////////
app.use(bodyParser.urlencoded({extended:false}));
//CONFIG DO SESSION
app.use(session({
    secret: 'criarChave',
    resave: false,
    saveUninitialized: true
}));

//////ARQUIVOS ESTATICOS EX CSS E JAVASCRIPT
app.use(express.static('public'));


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000,()=>{
    console.log('criado');
})

app.get('/',(req,res)=>{
    if(req.session.errors){
        var arrayErros = req.session.errors;
        req.session.errors = '';
        return res.render('index',{NavActiveCad:true,error:arrayErros});
    }

    if(req.session.success){
        req.session.success = false;
        return res.render('index',{NavActiveCad:true,MsgSuccess: true});
    }
    res.render('index',{NavActiveCad:true});
})

app.get('/users',(req,res)=>{
    res.render('users',{NavActiveUsers:true});
})

app.get('/editar',(req,res)=>{
    res.render('editar');
})

//VAI PEGAR OS DADOS DO FORMULARIO 
app.post('/cad',(req,res)=>{
    var nome = req.body.nome;
    var senha = req.body.senha;
    console.log(nome);
    console.log(senha);

    //ARRAY QUE VAI ARMAZENAR OS ERROS
    const erros = [];

    //REMOVER ESPAÇOS EM BRANCO ANTES E DEPOIS

        nome.trim();
        senha.trim();

    //LIMPAR O NOME DE CARACTERES ESPECIAIS
    nome = nome.replace(/[^A-zÀ-ú\s]/gi,'');

    //VERIFICAR SE ESTA VAZIO OU NAO DEFINIDO O CAMPO

    if(nome == '' || typeof nome == undefined || nome == null) {
        erros.push({mensagem: "Campo nome nao pode ser vazio"});
    }

    //VERIFICAR SE O CAMPO NOME É VALIDO (APENAS LETRAS)
    if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome)){
        erros.push({mensagem: "Nome inválido!"});
    }

    //VERIFICAR O CAMPO DA SENHA

    if(!/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z$*&@#]{8,}$/.test(senha)){
        erros.push({mensagem: 'Senha inválida'})
    }

    

    //VERIFICAR SE EMAIL É VALIDO
   

    //VERIFICAR SE TEM ERROS
    if(erros.length > 0) {
       req.session.errors = erros;
       req.session.success = false;
       console.log(erros)
       return res.redirect('/');
    }

    //SUCESSO NENHUM ERRO
    //SALVAR NO BANCO DE DADOS
    console.log('validação realzizada com sucesso')
    req.session.success = true;
    taskController.novaTarefa(nome,senha,true,'2022-01-01');
    return res.redirect('/');    
})