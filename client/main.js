const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune-button')

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

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)