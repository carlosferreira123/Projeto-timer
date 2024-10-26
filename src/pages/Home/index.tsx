import { Play } from "phosphor-react";
import { CountdowContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60, 'O valor deve ser entre 5 e 60')
})




type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, } = useForm<NewCycleFormData>( {
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })
  
  function handleCreateNewCycle(data: NewCycleFormData) {
      console.log(data)
      reset();
     
  } 
  

const task = watch('task')
const isSubmitDisabled = !task; 

  return (
    <HomeContainer>
       <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
         <FormContainer>
          <label htmlFor="Task">Vou trabalar em</label>
          <TaskInput 
          id="task" 
          list="task-suggestions"
          placeholder="Dê um nome para o seu projeto"
          {...register('task')}
        
          
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
          {...register('minutesAmount', { valueAsNumber: true })}

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

         <StartCountdownButton disabled={isSubmitDisabled} type="submit">
           <Play size={24} />
           Começar
         </StartCountdownButton>
        </form>

    </HomeContainer>
  )
}