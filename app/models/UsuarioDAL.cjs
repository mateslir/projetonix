module.exports = class UsuarioDAL {

    constructor(conexao){
        this.conexao = conexao;
    }

    findAll(){
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT u.id_usuario, u.user_name, " + "u.email, u.telefone", function (error, elements){
                if (error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    findUserEmail(camposForm) {
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT * FROM usuario WHERE email = ?",
            [camposForm.email],
                function (error, elements) {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(elements);
                });
        });
    };
    findID(id) {
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT * FROM usuario WHERE id_usuario = ?", [id], function (error, elements) {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(elements);
                });
        });
    };

    FindPage(pagina, total){
        return new Promise((resolve, reject)=>{
            this.conexao.query('SELECT * FROM usuario limit '+ pagina + ', '+ total,  function(error, elements){
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    TotalReg(){
        return new Promise((resolve, reject)=>{
            this.conexao.query('SELECT count(*) total FROM usuario ',  function(error, elements){
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    create(camposJson) {
        return new Promise((resolve, reject) => {
            this.conexao.query("insert into usuario set ?", camposJson, function(error, elements){
                if (error) {
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    update(camposJson, id) {
        return new Promise((resolve, reject) => {
            this.conexao.query("UPDATE usuario SET ? WHERE id_usuario = ?",
            [camposJson, id],
            function (error, results, fields) {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.conexao.query("UPDATE usuario SET status_usu = 0 WHERE id_usuario = ?", [id], function(error, results) {
                if (error) {
                    return reject(error);
                }
                return resolve(results[0]);
            });
        });
    }

}