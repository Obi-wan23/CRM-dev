import { Link } from "react-router-dom";
import { arrBtnStatus } from "../../helpers/const";

const LeftBar = ({ status, setStatus, count }) => {
  return (
    <div className="left-panel blue-skin">
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">
          учебный проект webcademy
        </div>
      </div>

      <div className="left-panel__user clearfix">
        <div className="left-panel__user-photo">
          <img src="./img/avatars/avatar-128.jpg" alt="Avatar" />
        </div>
        <div className="left-panel__user-name">
          Петр <br />
          Васильевич
        </div>
      </div>

      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
          <li>
            {arrBtnStatus.map((btn) => (
              <Link
                key={btn.active}
                onClick={() => setStatus(btn.active)}
                className={` ${status === btn.active ? "active" : ""}`}
              >
                {btn.name}
              
							{btn.active === 'new' && (
								<div className="badge" id="badge-new">
                  {count.length}
                </div>
							)}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
