
let formCheck = false
let errorMsg = ""
function collectData() {
    let id = 1;
    if (checkID() !== null){
      id = checkID()
    }
    const form = document.forms[0].elements;
    const userName = form.userName.value;
    const password = form.password.value;
    const age = form.age.value;
    const email = form.email.value;
    const phoneNumb = form.phoneNumb.value;
    const creditCard = form.creditCard.value;
    formChecker(userName, password, age, email, phoneNumb, creditCard)
  
    const user = {
      id,  
      userName,
      password,
      age,
      email,
      phoneNumb,
      creditCard


    };
    return user;
  }

  function checkID() {
    let id = 1
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
        const maxID = Math.max(...users.map(user => user.id));
        id = maxID + 1;
    }
    return id 
  }
  
  function formChecker(userName, password, age, email, phoneNumb, creditCard){
    fake=[] 
    if (!userName.match(/^[a-zA-Z0-9]+$/)){
      fake.push(false)
      errorMsg = "Incorrect Username input"
    } 
    if (password.length < 8 ){
      console.log("Password is too short")
      fake.push(false)
      errorMsg = "Password is too short"
    } 
    if (!age.match(/^\d+$/)){
      fake.push(false)
      errorMsg = "Incorrect Age input"
    } 
    if (!email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)){
      fake.push(false)
      errorMsg = "Incorrect Email input"
    } 
    if (!phoneNumb.match(/^\d{10,12}$/)){
      fake.push(false)
      errorMsg = "Incorrect Phone number input"
    }
    if (!creditCard.match(/^\d{4}([- ]\d{4}){3}$/)){
      fake.push(false)
      errorMsg = "Incorrect card number input"
    }

    
    if (fake.length > 0){
      formCheck = false
    } else {formCheck = true
    }
  }