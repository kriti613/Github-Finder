// Init Github class
const github = new Github;
// Init UI class
const ui = new UI;

// Search input 
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText != ''){
    // Making http call
    github.getUser(userText)
    .then(data => {
      // console.log(data);
      if(data.profile.message === 'Not Found'){
        // Show alert
        ui.showAlert('User not found','alert alert-danger');
      }
      else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});