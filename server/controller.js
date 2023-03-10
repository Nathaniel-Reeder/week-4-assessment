let globalId = 1
const goalsArr = [
    {
        title: "Track Goals",
        checkIn: "Every day",
        id: 0
    }
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['A fresh start will put you on your way.', 'Failure is the chance to do better next time.', 'Go take a rest; you deserve it.', 'It is better to deal with problems before they arise.', 'Now is the time to try something new'];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createGoals: (req, res) => {
        goalObj = req.body
        goalObj.id = globalId
        globalId++
        goalsArr.push(goalObj)
        console.log(goalsArr)
        res.status(200).send(goalObj)
    }, 

    editGoal: (req, res) => {
        let {id} = req.params
        
        const index = goalsArr.findIndex(goal => goal.id === +id)
        console.log(id)
        console.log(goalsArr[index].id)
        newObj = req.body
        // console.log(newObj)

        if (index >= 0){
            goalsArr[index].title = newObj.title
            goalsArr[index].checkIn = newObj.checkIn
            res.status(200).send(goalsArr[index])
        } else {
            res.sendStatus(404)
        }
    },

    deleteGoal: (req, res) => {
        let {id} = req.params
        const index = goalsArr.findIndex(goal => goal.id === +id)

        if(index >= 0){
            goalsArr.splice(index, 1)
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    },
    getAllGoals: (req, res) => {
        res.status(200).send(goalsArr)
    }

}