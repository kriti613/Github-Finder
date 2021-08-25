class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
    <div class = "card card-body mb-3">
      <div class = "row">
        <div class = "col-md-3">
          <img class = "img-fluid mb-2" src="${user.avatar_url}">
          <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary d-grid gap-2 mb-2">View Profile</a> 
        </div>
        <div class = "col-md-9">
        <span class = "btn btn-primary btn-sm"> Public Repos: ${user.public_repos}</span> 
        <span class = "btn btn-secondary btn-sm"> Public Gists: ${user.public_gists}</span> 
        <span class = "btn btn-success btn-sm"> Followers: ${user.followers}</span> 
        <span class = "btn btn-info btn-sm"> Following: ${user.following}</span> 
        <br><br>
        <ul class = "list-group">
          <li class = "list-group-item"> Company: ${user.company}</li>
          <li class = "list-group-item"> Website/Blog: ${user.blog}</li>
          <li class = "list-group-item"> Location: ${user.location}</li>
          <li class = "list-group-item"> Member Since: ${user.created_at}</li>
        </ul>
        </div>
      </div>
    </div>
    <h3 class = "page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  } 
  
  // Showing repos
  showRepos(repos){
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class = "card card-body mb-2">
          <div class = "row">
            <div class = "col-md-6">
              <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
            </div>
            <div class = "col-md-6">
            <span class = "btn btn-primary"> Stars: ${repo.stargazers_count}</span> 
            <span class = "btn btn-secondary"> Watchers: ${repo.watchers}</span> 
            <span class = "btn btn-success"> Forks: ${repo.forks_count}</span> 
            </div>
          </div>
        </div>
      `
    });

    document.getElementById('repos').innerHTML = output;
  }
  
  showAlert(message, className){
    // Clear any remaining alerts
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    // Inserting alert
    container.insertBefore(div,search); 
    // Seting time
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }


  clearProfile(){
    this.profile.innerHTML = '';
  }
}
