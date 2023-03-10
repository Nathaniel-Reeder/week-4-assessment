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
        idToChange = req.params
        let {id} = idToChange
        id = parseInt(id)
        newObj = req.body
        // console.log(newObj)

        for(let i = 0; i < goalsArr.length; i++){
            console.log(goalsArr[i].id)
            if (goalsArr[i].id === id){
                goalsArr[i].title = newObj.title
                goalsArr[i].checkIn = newObj.checkIn
                res.status(200).send(goalsArr[i])
            } else {
                res.sendStatus(404)
            }
        }
    }

}