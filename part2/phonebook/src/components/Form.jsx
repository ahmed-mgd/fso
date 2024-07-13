const Form = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
  personsService,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      if (
        !confirm(
          `${newName} already exists. Replace the old number with a new one?`
        )
      )
        return;
      const id = persons.find((person) => person.name === newName).id;
      const updatedPerson = { name: newName, number: newNumber };
      personsService.update(id, updatedPerson).then(() => {
        setPersons(
          persons.map((person) => (person.id === id ? updatedPerson : person))
        );
        setNewName("");
        setNewNumber("");
      });
    } else {
      const newPerson = { name: newName, number: newNumber };
      personsService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  return (
    <form>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
