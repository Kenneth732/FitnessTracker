// Define an array to store the exercise history
let exerciseHistory = [];

// Function to handle exercise logging
function logExercise(event) {
  event.preventDefault();

  // Retrieve exercise details from the form inputs
  const exerciseName = document.getElementById('exercise-name').value;
  const exerciseDuration = document.getElementById('exercise-duration').value;

  // Create an object to represent the exercise
  const exercise = {
    name: exerciseName,
    duration: exerciseDuration,
    date: new Date().toLocaleDateString(),
  };

  // Add the exercise to the exercise history array
  exerciseHistory.push(exercise);

  // Clear the form inputs
  document.getElementById('exercise-name').value = '';
  document.getElementById('exercise-duration').value = '';

  // Display the updated exercise history
  displayExerciseHistory();
}

// Function to display the exercise history
function displayExerciseHistory() {
  const exerciseHistorySection = document.getElementById('exercise-history');

  // Clear the exercise history section
  exerciseHistorySection.innerHTML = '';

  // Iterate over the exercise history array and create HTML elements for each exercise
  exerciseHistory.forEach((exercise, index) => {
    const exerciseElement = document.createElement('div');
    exerciseElement.classList.add('exercise');
    exerciseElement.innerHTML = `
      <h3>${exercise.name}</h3>
      <p>Duration: ${exercise.duration} minutes</p>
      <p>Date: ${exercise.date}</p>
    `;

    exerciseHistorySection.appendChild(exerciseElement);
  });
}

// Event listener for exercise logging form submission
document.getElementById('exercise-log-form').addEventListener('submit', logExercise);
