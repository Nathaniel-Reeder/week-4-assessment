const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createGoals, editGoal, deleteGoal, getAllGoals } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goals", createGoals);
app.put("/api/goals/:id", editGoal);
app.delete("/api/goals/:id", deleteGoal)
app.get("/api/goals/", getAllGoals)

app.listen(4000, () => console.log("Server running on 4000"));
