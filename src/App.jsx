import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

const App = () => (
  <div className="container">
    <h1>PhoneBook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default App;
