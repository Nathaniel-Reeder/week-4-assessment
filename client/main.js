const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune-button')
const goalCreateForm = document.getElementById('goal-form')
const goalUpdateForm = document.getElementById('update-goal')
const goalDeleteForm = document.getElementById('delete-form')
const goalAll = document.getElementById('show-all')
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
        goalContainer.innerHTML = ''
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
        goalContainer.innerHTML = ''
        createGoalCard(res.data)
    })
    
}

const deleteGoal = event => {
    event.preventDefault()

    let id = document.getElementById('goal-delete').value
    console.log(id)

    axios.delete("http://localhost:4000/api/goals/" + id).then(res => {
        goalContainer.innerHTML = ''
        alert(`Goal with id ${id} has been deleted.`)
    })
}

const showAllGoal = () => {
    axios.get("http://localhost:4000/api/goals/")
    .then(responseArr => {
        console.log(responseArr)
        let array = responseArr.data
        console.log(array)
        goalContainer.innerHTML = ''
        array.forEach((data) => {
            
            createGoalCard(data)
            console.log(data)
        })
    })
}

const createGoalCard = data => {
    // console.log(data.title)
    // goalContainer.innerHTML = ''
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<p class ="goal-title">Goal: ${data.title}</p>
    <p class="check-in"> Check-In: ${data.checkIn}</p>
    <p class="goal-id"> ID: ${data.id}</p>
    `

    goalContainer.appendChild(goalCard)
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalCreateForm.addEventListener('submit', createGoals)
goalUpdateForm.addEventListener('submit', updateGoal)
goalDeleteForm.addEventListener('submit', deleteGoal)
goalAll.addEventListener('click', showAllGoal)