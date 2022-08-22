export default function Botoes() {
  return (
    <div className="filtros btn-group stack-exception">
      <button className="btn btn-primary">
        <span className="esconde">Mostrar </span>
        <span>Todas As </span>
        <span className="esconde">Tarefas</span>
      </button>
      <button className="btn btn-primary">
        <span className="esconde">Mostrar </span>
        <span className="esconde">Tarefas </span>
        <span>Ativas</span>
      </button>
      <button className="btn btn-primary">
        <span className="esconde">Mostrar </span>
        <span className="esconde">Tarefas </span>
        <span>Finalizadas</span>
      </button>
    </div>
  );
}