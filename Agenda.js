
class Agenda{
   
   constructor(){
     
      this.agenda = []
     
   }


  
   /** *********************************** */
   getAgenda(){
     
       return this.agenda
     
   }

   /** ************************************ */
   setAgenda(agenda){
     
       this.agenda = agenda
     
   }

   /** *************************************** */
   verificaExiste(nome){

     for(let i=0; i < this.agenda.length; i++){
        
        if (this.agenda[i].nome == nome){
          
              return true
          
          } 
       
      }
  
      return false
  
    }


  
    /** ************************************** */
    gravarDados(contato){
 
      if(!this.verificaExiste(contato.nome)){
    
        this.agenda.push(contato)

        console.log (`${contato.nome} cadastrado  com sucesso ...`)
        
      }  else {

          console.log (`${contato.nome} já cadastrado...`)
        
      }
      
    }

  
    /** ********************************************* */
    listagem(){

      let novaagenda = this.agenda.sort(function(a, b){
     
         if(a.nome > b.nome) { return  1 }
         if(a.nome < b.nome) { return -1 }
     
         return 0
        
      })

     console.log('=================== LISTAGEM ==========================') 
      
      for(let i=0; i < novaagenda.length; i++){
        
            console.log(i, '\t' + this.agenda[i].nome + 
                           '\t' + this.agenda[i].telefone)

          //   console.log(i, '\t' + this.agenda[i].nome + 
          //                 '\t' + this.agenda[i].telefone)
        
        
       }
     
     console.log('=======================================================')
         
    }

  
    /** ************************************************* */
    excluir(){
      
     this.listagem()
    
     let opcao = Number(prompt("Tecle a opcao para excluir..."))
  
      for(let i=0; i < this.agenda.length; i++){
        
          if (i == opcao){
            
               this.agenda.splice(i, 1);
            
           } 
        
       }
  
     }
  
}

module.exports = Agenda