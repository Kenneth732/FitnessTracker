let exerciseList = [];

window.addEventListener('load', (e) => {
    const exerciseStorage = JSON.parse(localStorage.getItem('exercise'));

    if (exerciseStorage) {
        exerciseList = exerciseStorage;
        handleDisplay(exerciseList);
    }
});

document.querySelector('#exercise-log-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let exerciseName = document.querySelector('#exercise-name').value;
    let exerciseDuration = document.querySelector('#exercise-duration').value;

    if (exerciseName.trim() === '' || exerciseDuration.trim() === '') {
        alert('Please fill in all the fields');
        return;
    }

    addExercise(exerciseName, exerciseDuration);
});

function addExercise(exerciseName, exerciseDuration) {
    let newExercise = {
        id: exerciseList.length + 1,
        exerciseName: exerciseName,
        exerciseDuration: exerciseDuration,
        date: new Date().toLocaleDateString()
    };

    exerciseList.push(newExercise);
    handleDisplay(exerciseList);
    localStorage.setItem('exercise', JSON.stringify(exerciseList));
}


function handleDisplay(exercises) {
    const exerciseHistory = document.querySelector('#exercise-history');
    exerciseHistory.innerHTML = '';

    exercises.forEach((exercise) => {
        const exerciseListElement = document.createElement('div');
        exerciseListElement.innerHTML = `
        <h3>Exercise ID: ${exercise.id}</h3>
        <h4>${exercise.exerciseName}</h4>
        <p>Duration: ${exercise.exerciseDuration}</p>
        <p>Date: ${exercise.date}</p>
        `;
        exerciseHistory.appendChild(exerciseListElement);
    });
}
