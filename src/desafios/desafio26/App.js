import Lista from "./Lista";
import Botoes from "./Botoes";

import { useState } from "react";

export default function App(props) {
  const listaDeTarefas = props.tarefas.map((tarefa) => (
    <Lista
      id={tarefa.id}
      name={tarefa.name}
      completed={false}
      key={tarefa.id}
    />
  ));

  const [nomeDaTarefa, setarNome] = useState("");

  return (
    <div className="app-lista container w-75 mx-auto text-center bg-light bg-opacity-50 p-5 m-5 rounded">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();

          let tarefaObjeto = {
            id: props.tarefas.length,
            name: nomeDaTarefa,
            completed: false
          };
          props.tarefas.push(tarefaObjeto);
        }}
      >
        <h1 className="">O Que Eu Preciso Fazer?</h1>
        <input
          type="text"
          id="nova-tarefa-input"
          className="input-group rounded"
          name="texto"
          onChange={(ev) => setarNome(ev.target.value)}
          value={nomeDaTarefa}
          autoComplete="off"
        />
        <button type="submit" className="m-1 btn btn-warning">
          Adicionar
        </button>
      </form>
      <Botoes />
      <h2 id="lista-headings">Lista de Tarefas</h2>
      <ul className="lista stack-large stack-exception">{listaDeTarefas}</ul>
    </div>
  );
}