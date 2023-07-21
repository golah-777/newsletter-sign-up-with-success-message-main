class App{
  constructor(){
   this.form = document.querySelector(".form");
   this.errorMessage = document.querySelector(".error-message");
   this.emailInput = document.querySelector(".email-input");
   this.input = document.querySelector(".enter-email");
   this.submitBtn = document.querySelector(".Submit-btn");
   this.main = document.querySelector('.main');
   this.personsEmail = document.querySelector('.persons-email');
   this.dismissBtn = document.querySelector('.dismiss-btn');
   this.successMessage = document.querySelector('.Success-message');

   this.eventListeners();
  }

  eventListeners(){
    document.body.addEventListener("click",(event)=>{
      this.handleOnclick(event);
    })

    this.form.addEventListener("submit",(event)=>{
      event.preventDefault();
    })
  }

  handleOnclick(event){
    const submitBtnClicked = this.submitBtn.contains(event.target);
    const dismissBtnClicked = this.dismissBtn.contains(event.target);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    const email = this.input.value;
    const isEmailVailid = emailRegex.test(email);

    if(submitBtnClicked && (email=='' || !isEmailVailid)){
      this.errorMessage.style.display = 'inline';
      this.emailInput.classList.add("email-input-js");
      this.input.classList.add("enter-email-js");
      this.input.value = '';
    } else if (submitBtnClicked && (!email=='' && isEmailVailid)){
      this.errorMessage.style.display = 'none';
      this.emailInput.classList.remove("email-input-js");
      this.input.classList.remove("enter-email-js");
      this.main.style.visibility = 'hidden';
      this.personsEmail.innerHTML = email;
      this.successMessage.style.display = 'inline';
    }

    if(dismissBtnClicked){
      this.main.style.visibility = 'visible';
      this.personsEmail.innerHTML = '';
      this.input.value = '';
      this.successMessage.style.display = 'none';
    }
  }
}

const app = new App();