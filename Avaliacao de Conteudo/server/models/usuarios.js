class Usuario {
    constructor(idlogin,
        login,
        senha,
        nome,
        sobrenome) {
        this.idlogin = idlogin;
        this.login = login;
        this.senha = senha;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

module.exports = Usuario