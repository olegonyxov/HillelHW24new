const usersMain = document.querySelector(".usersMain")
const viewUser = document.querySelector(".viewUser")
let add_btn = document.createElement("input")
setMultiAttr(add_btn,{'type':'button','value':"ADD","class":"add_btn"})
usersMain.appendChild(add_btn)
add_btn.addEventListener('click',(event) => {
    showAddForm()
})


function showAddForm(userID){
    let showForm = document.querySelector(".userForm")
    showForm.classList.remove("hidden")
    let saveUserBtn = document.querySelector(".saveUserBtn")
    saveUserBtn.addEventListener('click',(event)=> {
    addNewUser(userID)
    })
}


function addNewUser(userID){
    const user = collectData(userID);
    let users = []; //finally
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    if (formCheck === true){
        users.push(user);
    users.sort((a, b) => a.id - b.id);
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
    } else {alert(errorMsg)}
    
}


const storedUser = localStorage.getItem('users')
const parsedUser = JSON.parse(storedUser) 
let users_Raw = document.createElement("div")
usersMain.appendChild(users_Raw)  
for (user in parsedUser){
    console.log(parsedUser[user])
    let userRaw = document.createElement("ul")
    userRaw.textContent= `${parsedUser[user].userName}  ${parsedUser[user].age}`
    users_Raw.appendChild(userRaw)
    let userDescription = document.createElement("li")
    userDescription.setAttribute('class', 'userDesc hidden')
    userRaw.appendChild(userDescription)
    userDescription.textContent= `Username: ${parsedUser[user].userName}.  Age : ${parsedUser[user].age}. Email : ${parsedUser[user].email}. Phone number :  ${parsedUser[user].phoneNumb}. Credit card : ${parsedUser[user].creditCard} `
    userDescription.setAttribute('userID', `${parsedUser[user].id}`)

    

    let view_btn = document.createElement("input")
    setMultiAttr(view_btn,{'type':"button",'value':"VIEW",'class':'view_btn'})
    userRaw.appendChild(view_btn)
    let edit_btn = document.createElement("input")
    setMultiAttr(edit_btn,{'type':"button",'value':"EDIT",'class':'edit_btn'})
    userRaw.appendChild(edit_btn)
    let remove_btn = document.createElement("input")
    setMultiAttr(remove_btn,{'type':"button",'value':"REMOVE",'class':'remove_btn'})
    userRaw.appendChild(remove_btn)
}


users_Raw.addEventListener('click', (event) => {
    if (event.target.classList.contains('view_btn')) {
        const userRaw = event.target.closest('ul');
        const userDescription = userRaw.querySelector('.userDesc');        
        userDescription.classList.toggle('hidden');
    } else if (event.target.classList.contains('remove_btn')) {
        const userRaw = event.target.closest('ul');
        const userDescription = userRaw.querySelector('.userDesc');        
        const userID = parseInt(userDescription.getAttribute('userID'));

        $('#confirmationModal').modal('show');
        $('#confirmDeleteBtn').on('click', function() {
            const storedUsers = JSON.parse(localStorage.getItem('users'));
            const newUsersList = storedUsers.filter(user => user.id !== userID);
            localStorage.setItem("users", JSON.stringify(newUsersList));
            $('#confirmationModal').modal('hide');
            location.reload();
        });
        
    }else if (event.target.classList.contains('edit_btn')) {
        const userRaw = event.target.closest('ul');
        const userDescription = userRaw.querySelector('.userDesc');        
        const userID = parseInt(userDescription.getAttribute('userID'));
        showAddForm(userID)
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const newUsersList = storedUsers.filter(user => user.id !== userID);
        localStorage.setItem("users", JSON.stringify(newUsersList));
    } 
});