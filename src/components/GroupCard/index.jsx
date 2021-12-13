import "./style.css";

const GroupsCard = () => {
  return (
    <div className="container-groups">
      <div className="titleGroups">
        <h2>Título hábito</h2>
        <div className="buttons">
          <button>Editar</button>
          <button>Remover</button>
        </div>
      </div>
      <div className="groupDescription">
        <div>
          <h3>Categoria</h3>
          <span>Incluir Categoria</span>
        </div>
        <div>
          <h3>Frequência</h3>
          <span>Incluir Frequência</span>
        </div>
      </div>
    </div>
  );
};

export default GroupsCard;
