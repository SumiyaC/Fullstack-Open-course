const Total = ({ parts }) => {
    const totalExercises = parts.reduce(
      (sum, part) => sum + part.exercises,0)
  
    return <p><b>total of {totalExercises} exercises</b></p>
  };

const Course = ({ course }) => {
  return (
    <div>
      <h3>{course.name}</h3>
      {course.parts.map(part => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <Total parts={course.parts} />
    </div>
  )
}

export default Course