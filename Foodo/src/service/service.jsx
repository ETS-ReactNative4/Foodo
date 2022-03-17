class Db {
  posts = [];
  users = [];
  postUrl = "https://foodreviewappdb-default-rtdb.firebaseio.com/posts/";
  userUrl = "https://foodreviewappdb-default-rtdb.firebaseio.com/users/";
  loginUrl = "https://foodreviewappdb-default-rtdb.firebaseio.com/login/";

  async fetchPost() {
    const response = await fetch(this.postUrl + ".json");
    const data = await response.json();

    console.log(data);
    this.posts = data;
  }

  async getPost() {
    if (this.posts.length === 0) {
      await this.fetchPost();
    }
    console.log(this.posts);
    return this.posts;
  }

  async fetchUser() {
    const response = await fetch(this.userUrl + ".json");
    const data = await response.json();
    // console.log(data);
    this.users = data;
  }

  async getUser() {
    if (this.users.length === 0) {
      await this.fetchUser();
    }
    return this.users;
  }

  async fetchLogin() {
    const response = await fetch(this.loginUrl + ".json");
    const data = await response.json();
    console.log(data);
    const login = data;
    return login;
  }

  async getSingleLogin(id){
    const response = await fetch(this.loginUrl+id+".json");
    const data = await response.json();
    return data;
  }

  async createPost(title, body, url, uid, country, locale) {
    const post = {
      title: title,
      body: body,
      url: url,
      uid: uid,
      country: country,
      locale: locale,
      id: Date.now(),
    };
    const response = await fetch(this.postUrl + ".json", {
      method: "POST",
      body: JSON.stringify(post),
    });
    const data = await response.json();
    //this.posts.push(data);
    console.log(data);
  }

  async createUser(username, profileImg) {
    const user = {
      username: username,
      profileImg: profileImg,
      id: Date.now(),
      
    };
    const response = await fetch(this.userUrl + ".json", {
      method: "POST",
      body: JSON.stringify(user),
    });
    const data = await response.json();
    this.users.push(data);
    console.log(data);
    return data.id;
  }

  async createLogin(email, password, uid) {
    const login = {
      email: email,
      password: password,
      uid: uid,
    };
    const response = await fetch(this.loginUrl + ".json", {
      method: "POST",
      body: JSON.stringify(login),
    });
    const data = await response.json();
    console.log(data);
  }

  async deletePost(id) {
    const response = await fetch(this.postUrl + id + ".json", {
      method: "DELETE",
    });
    console.log(response);
    console.log(id);
  }

  async deleteUser(id) {
    const response = await fetch(this.userUrl + id + ".json", {
      method: "DELETE",
    });
    console.log(response);
  }

  async deleteLogin(id) {
    const response = await fetch(this.loginUrl + id + ".json", {
      method: "DELETE",
    });
    console.log(response);
  }

  async getSinglePost(id) {
    if (this.posts.length === 0) {
      await this.fetchPost();
    }
    const post = this.posts[id];
    return post;
  }

  async getSingleUser(id) {
    if (this.users.length === 0) {
      await this.fetchUser();
    }
    const user = this.users[id];
    return user;
  }

  async updatePost(id, updatePost) {
    const post = await this.getSinglePost(id);
    console.log(post);
    const response = await fetch(this.postUrl + id + ".json", {
      method: "PUT",
      body: JSON.stringify({ ...post, ...updatePost }),
    });
    console.log(response);
  }

  async updateUser(id, updateUser) {
    const user = await this.getSingleUser(id);
    console.log(user);
    const response = await fetch(this.userUrl + id + ".json", {
      method: "PUT",
      body: JSON.stringify({ ...user, ...updateUser }),
    });
    console.log(response);
  }

  async updateLogin(id, updateLogin) {
    const login = await this.fetchLogin();
    console.log(login);
    const response = await fetch(this.loginUrl + id + ".json", {
      method: "PUT",
      body: JSON.stringify({ ...login[id], ...updateLogin }),
    });
    console.log(response);
  }
}

const dbT = new Db();
export default dbT;
