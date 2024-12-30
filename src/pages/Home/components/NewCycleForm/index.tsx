import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { Cyclescontext } from "../../../../contexts/CyclesContext";



export function NewCycleForm() {  
   const { activeCycle } = useContext(Cyclescontext)
   const { register } = useFormContext()
   
    
    
    return (
        <FormContainer>
        <label htmlFor="Task">Vou trabalar em</label>
        <TaskInput 
        id="task" 
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}

        />
       
        <span>minutos</span>
       </FormContainer>
    )
}