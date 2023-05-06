class Contato{
   constructor(){
   }

   setContato(nome, telefone){
     this.nome = nome
     this.telefone = telefone
   }

   getNome(){
     return this.nome
   }

   getTelefone(){
      return this.telefone
   }

 }

module.exports = Contato