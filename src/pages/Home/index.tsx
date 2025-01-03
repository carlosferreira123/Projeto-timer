import { HandPalm, Play } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountdownButton, } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import {  useContext } from "react";

import { Countdown } from "./components/Countdown";
import { Cyclescontext } from "../../contexts/CyclesContext";
import { NewCycleForm } from "./components/NewCycleForm"


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
  .number()
  .min(5)
  .max(60, 'O valor deve ser entre 5 e 60')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home() {
  
  const { activeCycle, createNewCycle, interruptCurrentCycle } = 
  useContext(Cyclescontext)
   
  const newCycleForm = useForm<NewCycleFormData>( {
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })
  
  const {  handleSubmit, watch, reset } = newCycleForm
  
  function handleCreateNewCycle(data: NewCycleFormData) {
      createNewCycle(data)
      reset()                                                                               
  }

  
  const task = watch('task')
  const isSubmitDisabled = !task; 

  return (
    <HomeContainer>
       <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
         
         
         <FormProvider {...newCycleForm}>
           <NewCycleForm/>
         </FormProvider>
          
         <Countdown/>   
        

         { activeCycle ? (
           <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
         ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
           <Play size={24} />
           Começar
         </StartCountdownButton>
         )}
        </form>

    </HomeContainer>
  )
}