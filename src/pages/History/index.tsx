import { formatDistanceToNow } from "date-fns";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { Cyclescontext } from "../../contexts/CyclesContext";


export function History() {
    const { cycles } = useContext(Cyclescontext)

    return (
        <HistoryContainer>
            <h1>Meu historico</h1>

            <HistoryList>
                
                <table>
                    <thead>
                         <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Iníco</th>
                            <th>Status</th>
                         </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td> {cycle.minutesAmount} minutes</td>
                                    <td>
                                        {formatDistanceToNow(cycle.startDate,{ 
                                        addSuffix:true,
                                        locale: ptBR, 
                                    })}
                                    </td>
                                    
                                    <td>
                                        {cycle.finisheDate && (
                                          <Status statusColor="green">Concluído</Status> 
                                        )}

                                        {cycle.interruptedDate && (
                                            <Status statusColor="red">Interrompido</Status>
                                        )}
                                        {!cycle.finisheDate && !cycle.interruptedDate &&  (
                                            <Status statusColor="yellow">Em andamento</Status>
                                        )}

                                    </td>
                                </tr>
                             )
                            })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}