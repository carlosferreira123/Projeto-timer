import { Play } from "phosphor-react";
import { CountdowContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
 function handleSubmit (event) {
   
 }

  return (
    <HomeContainer>
       <form onSubmit={handleSubmit} action="">
         <FormContainer>
          <label htmlFor="Task">Vou trabalar em</label>
          <TaskInput 
          id="task" 
          list="task-suggestions"
          placeholder="Dê um nome para o seu projeto"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          />
            
          <datalist id="task-suggestions">
             <option value="Projeto 1"/>
             <option value="Projeto 2"/>
             <option value="Projeto 3"/>
             <option value="Projeto 4"/>
          </datalist>

          <label htmlFor="minutosAmount">durante</label>
          <MinutesAmountInput 
          type="number" 
          id="minutesAmount" 
          placeholder="00"
          step={5}
          max={60}
          />
         
          <span>minutos</span>
         </FormContainer>
         
         <CountdowContainer>
           <span>0</span>
           <span>0</span>
           <Separator>:</Separator>
           <span>0</span>
           <span>0</span>
         </CountdowContainer>

         <StartCountdownButton disabled={!task} type="submit">
           <Play size={24} />
           Começar
         </StartCountdownButton>
        </form>

    </HomeContainer>
  )
}