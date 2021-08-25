class Github{
  constructor(){
    this.client_id = '89942d4b63526c04cc07';
    this.client_secret = '656b9349feaf7cecb0164bf0ee9b265ebf23ff58';
    this.repos_count = 5;
    this.repos_sort = 'created asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&this.client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&this.client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    
    const repos = await reposResponse.json();

    return{
      profile,
      repos
    }
  }
}