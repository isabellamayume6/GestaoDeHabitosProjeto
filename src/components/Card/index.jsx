import {
  RiTodoFill,
  RiFocus2Line,
  RiCalendarEventFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
const url = `https://avatars.dicebear.com/api/big-smile/`;
export default function Card({ isGroup = false, info, onClick: func }) {
  console.log(info);
  let title = info.title;
  let users;
  if (isGroup) {
    users = info.users_on_group.slice(0, 4);
    title = info.name;
  }
  return (
    <div>
      <img src={info.icon} alt="" />
      <div>
        <div>
          <h3>{title}</h3>
          <span className="category">{info.category}</span>
          <span className="difficulty">{info.difficulty}</span>
        </div>
        {isGroup ? (
          <div>
            <div>
              <RiTodoFill />
              <span>{info.activities.length} </span>
            </div>
            <div>
              <RiFocus2Line />
              <span>{info.goals.length} </span>
            </div>
            <div>
              {users.map((user) => (
                <img key={user.id} src={`${url}${user.username}.svg`} alt="" />
              ))}
              {info.users_on_group > 4 && (
                <span>+{info.users_on_group.length - 4}</span>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div>
              <RiCalendarEventFill />
              <span>{info.frequency}</span>
            </div>
            <div>
              <RiCheckboxCircleFill />
              <span>{info.how_much_achieved}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
