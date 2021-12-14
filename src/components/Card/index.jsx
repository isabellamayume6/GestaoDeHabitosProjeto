import {
  RiTodoFill,
  RiFocus2Line,
  RiCalendarEventFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";

import {
  Container,
  Content,
  Footer,
  Header,
  AvatarContainer,
  Pill,
} from "./card.style";

const url = `https://avatars.dicebear.com/api/big-smile/`;

export default function Card({ secondary = false, isGroup = false, info }) {
  let title = info.title;
  let users;
  if (isGroup) {
    users = info.users_on_group.slice(0, 4);
    title = info.name;
  }
  return (
    <Container className="card" secondary={secondary}>
      <img
        className="card__icon"
        src="https://unsplash.it/640/640
"
        alt=""
      />
      <Content className="card__content">
        <Header className="content__header">
          <h3 className="title">{title}</h3>
          <div className="pills">
            {!!info.category && (
              <Pill isCat className="category">
                {info.category}
              </Pill>
            )}
            {!!info.difficulty && (
              <Pill className="difficulty">{info.difficulty}</Pill>
            )}
          </div>
        </Header>
        {isGroup ? (
          <Footer>
            <div className="details">
              <RiTodoFill />
              <span>{info.activities.length} </span>
            </div>

            <div className="details">
              <RiFocus2Line />
              <span>{info.goals.length} </span>
            </div>

            <AvatarContainer secondary={secondary}>
              {users.map((user) => (
                <span className="avatar" key={user.id}>
                  <img src={`${url}${user.username}.svg`} alt="" />
                </span>
              ))}
              {info.users_on_group.length > users.length && (
                <span>+{info.users_on_group.length - users.length}</span>
              )}
            </AvatarContainer>
          </Footer>
        ) : (
          <Footer>
            <div className="details">
              <RiCalendarEventFill />
              <span>{info.frequency}</span>
            </div>

            <div className="details">
              <RiCheckboxCircleFill />
              <span>{info.how_much_achieved}</span>
            </div>
          </Footer>
        )}
      </Content>
    </Container>
  );
}
