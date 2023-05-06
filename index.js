// Primeira versao

let Contato  = require("./Contato.js")
let Agenda   = require("./Agenda.js")

let agenda   = new Agenda()

let executando = true

while(executando){

   console.clear()

   console.log('==================== MENU =============================')
   console.log('       1 - Cadastrar                                   ')
   console.log('       2 - Lista                                       ')
   console.log('       3 - Excluir                                     ')
   console.log('       4 - Sair                                        ')
   console.log('=======================================================')

   let opcao = Number(prompt("Digite a sua opção "))

   switch(opcao){

      case 1:
       cadastrar()        
       break

      case 2:
       listar()
       prompt("Tecle algo para retornar...")
       break

      case 3:
       excluir()       
       break

      case 4:
       executando = false
       break
        
    }
  
}


/** *************************************** */
function cadastrar(){

   flag1 = true
  
   while (flag1){

      console.clear()
      
      console.log('=================== CADASTRO ==========================')       
      let nome       = prompt("Digite o Nome do Contato:  ")
      let telefone   = prompt("Digite o número  Telefone: ")     
      console.log('=======================================================')

      let contato = new Contato()

      contato.setContato(nome, telefone)

      agenda.gravarDados(contato)     
     
      let opcao  = prompt ("Deseja continuar cadastrando (s/n) ?")
 
      if(opcao.toUpperCase() == "N"){
        
          flag1 = false
        
      }
     
   }
  
}





/** ********************************************* */
function listar(){

  agenda.listagem()   
  
}


/** ***************************************** */
function excluir(){

  agenda.excluir()
  
}