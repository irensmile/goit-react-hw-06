import css from "./Contact.module.css";
import personPic from "../../images/person.png";
import phonePic from "../../images/phone.png";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.card}>
        <div>
          <div className={css.info}>
            <img className={css.icon} alt="Person" src={personPic} />
            {name}
          </div>
          <div className={css.info}>
            <img className={css.icon} alt="Phone" src={phonePic} />
            {number}
          </div>
        </div>
        <button onClick={() => dispatch(removeContact(id))}>Delete</button>
      </li>
    </>
  );
};
