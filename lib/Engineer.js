// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`


const Employee = requires('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = this.github   
    }
    getRole(){
       return 'Engineer'
    }
    getGithub(){
        return this.github
    }  
    // this might not me necessary
    getGitHubusername(){
        return this.GitHubusername
    }    
}


module.exports = Engineer;