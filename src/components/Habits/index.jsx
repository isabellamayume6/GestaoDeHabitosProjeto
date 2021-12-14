const CardHabits = ({ item }) => {
  return (
    <div>
      <div>
        <h2>{item.title}</h2>
      </div>
      <div>
        <h3>Categoria: {item.category}</h3>
        <h3>Dificuldade: {item.difficulty}</h3>
        <span>Frequência: {item.frequency}</span>
        <span>{item.achieved ? "Completo" : "Incompleto"}</span>
      </div>
    </div>
  );
};

export default CardHabits;
