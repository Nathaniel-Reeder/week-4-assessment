const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune-button')
const goalCreateForm = document.getElementById('goal-form')
const goalUpdateForm = document.getElementById('update-goal')
const goalContainer = document.getElementById('goal-info')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const fortune = res.data
        alert(fortune)
    })
    .catch(err => console.log(err))
}

const createGoals = (event) => {
    event.preventDefault();

    let title = document.getElementById('goal-title')
    let checkIn = document.getElementById('check-in-date')

    let bodyObj = {
        title: title.value, 
        checkIn: checkIn.value
    }

    axios.post("http://localhost:4000/api/goals/", bodyObj)
    .then(res => {
        createGoalCard(res.data)
    })
    .catch(err => console.log(err))
}

const updateGoal = (event) => {
    event.preventDefault();

    let id = document.getElementById('goal-update').value

    let title = document.getElementById('new-title')
    let checkIn = document.getElementById('new-check-in')

    let bodyObj = {
        title: title.value, 
        checkIn: checkIn.value
    }

    axios.put("http://localhost:4000/api/goals/" + id, bodyObj).then(res => {
        createGoalCard(res.data)
    })
    
}

const createGoalCard = data => {
    console.log(data.title)
    goalContainer.innerHTML = ''
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<p class ="goal-title">Goal: ${data.title}</p>
    <p class="check-in"> Check-In: ${data.checkIn}</p>
    `

    goalContainer.appendChild(goalCard)
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalCreateForm.addEventListener('submit', createGoals)
goalUpdateForm.addEventListener('submit', updateGoal)