import { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import Form from "./components/Form";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
      <Filter filter={filter} onChange={(event) => handleFilterChange(event)} />
      <h2>Add a new</h2>
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
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
