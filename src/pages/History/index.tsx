import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { Cyclescontext } from "../../contexts/CyclesContext";

export function History() {
    const { cycles } = useContext(Cyclescontext)

    return (
        <HistoryContainer>
            <h1>Meu historico</h1>

            <HistoryList>
                <HistoryContainer>
                    <h1>Meu historico</h1>

                    <pre>{JSON.stringify(cycles, null,2)}</pre>
                </HistoryContainer>
                
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluido</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluido</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluido</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluido</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="green">Concluido</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="yellow">Em andamento</Status></td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td><Status statusColor="red">Interrupido</Status></td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}