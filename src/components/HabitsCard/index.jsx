import "./style.css";

const HabitsCard = ({ title, category, frequency }) => {
  return (
    <div className="containerHabits">
      <div className="titleHabits">
        <h3>{title}</h3>
        <div className="buttons">
          <button>Editar</button>
          <button>Remover</button>
        </div>
      </div>
      <div className="habitDescription">
        <div>
          <h3>Categoria</h3>
          <span>{category}</span>
        </div>
        <div>
          <h3>Frequência</h3>
          <span>{frequency}</span>
        </div>
      </div>
    </div>
  );
};

export default HabitsCard;
