import { useState } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
      />
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <Person name={person.name} number={person.number} key={person.name} />
      ))}
    </div>
  );
};

export default App;
