class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    toJSON(){
        return{
            username : this.username,
            email : this.email
        };
    }
}

users = [];

regForm = document.getElementById('regForm');
userList = document.getElementById('userList');

regForm.addEventListener('submit', (event)=>
    {
        event.preventDefault();

        username = document.getElementById('username').value;
        
        email = document.getElementById('email').value;

        newUser = new User(username,email);

        users.push(newUser);

        displayUsers();

        console.log(JSON.stringify(newUser.toJSON()));
        
        regForm.reset();
});

function displayUsers(){
    userList.innerHTML = '';

    users.forEach(function(user,index){
        userItem = document.createElement('li');
        userItem.classList.add('list-group-item');
        userItem.textContent = (index +1) + '. ' + user.username + ' - ' + user.email;
        userList.appendChild(userItem);
    });
}




