
function collectData() {
    let id = checkID()
    const form = document.forms[0].elements;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
  
    const user = {
      id,  
      firstName,
      lastName,
      age

    };
    return user;
  }

  function checkID() {
    let id = 1
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
        console.log("checking id", users)
        const maxID = Math.max(...users.map(user => user.id));
        id = maxID + 1;
        console.log(checkID)
    }
    return id 
  }
