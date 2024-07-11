const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = (props) => {
  return <p key={props.id}>{props.name + " " + props.exercises}</p>;
};

const Content = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div id="content">
      {course.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      ))}
      <p>Total of {total} exercises.</p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content course={course} />
    </>
  );
};


export default Course;
