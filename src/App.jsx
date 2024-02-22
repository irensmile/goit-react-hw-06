import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { setFilter } from "./redux/filterSlice";
import { addContact, removeContact } from "./redux/contactsSlice";

function App() {
  const searchMessage = useSelector((state) => state.filter.value);
  const contactList = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  // // Load saved contacts (called once on loading)
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contactList));
  // }, [contactList]);

  // Callback for deleting a single contact (and updating local storage)
  const onDelete = (id) => {
    dispatch(removeContact(id));
  };

  // Callback adding a single contact (and updating local storage)
  const onAdd = (newContact) => {
    if (
      contactList.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };

  //Callback for searching
  const onSearch = (searchString) => {
    dispatch(setFilter(searchString));
  };

  // Function to filter element based on searchMessage
  const filterContacts = () => {
    return contactList.filter((contact) =>
      contact.name.toLowerCase().includes(searchMessage.toLowerCase())
    );
  };

  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox onSearch={onSearch} />
      <ContactList contacts={filterContacts()} onDelete={onDelete} />
    </div>
  );
}

export default App;
