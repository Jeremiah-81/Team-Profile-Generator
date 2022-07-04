const inquirer = require("inquirer");
const fs = require("fs");
const generatehtml = require("./src/page-template.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// an array of answers for the user.
const newStaffMemberData = [];

// an array of questions for the user inside the command line.
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "what is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "what is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "what is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "what is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
    newStaffMemberData.push(newManager);
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAns.github
    );
    newStaffMemberData.push(newEngineer);
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What school did you attend?",
        name: "school",
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school
    );
    newStaffMemberData.push(newIntern);
  }
};

async function promptQuestions() {
  await questions();

  const addMemberAns = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  if (addMemberAns.addMember === "Add a new member") {
    return promptQuestions();
  }
  return createTeam();
}

promptQuestions();

function createTeam() {
  console.log("new member", newStaffMemberData);
  fs.writeFileSync(
    "./output/index.html",
    generatehtml(newStaffMemberData),
    "utf-8"
  );
}
