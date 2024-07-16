import { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Notification from "./components/Notification";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [notifClass, setNotifClass] = useState("success");

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow =
    filter === ""
      ? persons
      : persons.filter(
          (person) =>
            person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} notifClass={notifClass} />
      <Filter filter={filter} onChange={(event) => handleFilterChange(event)} />
      <h2>Add a new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        setNotifClass={setNotifClass}
        setNotification={setNotification}
        personsService={personsService}
      />
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <Person name={person.name} number={person.number} key={person.name} />
      ))}
    </div>
  );
};

export default App;
