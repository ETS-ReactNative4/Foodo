class db{
    postUrl = "https://foodreviewappdb-default-rtdb.firebaseio.com/posts/.json";
    userUrl = "https://foodreviewappdb-default-rtdb.firebaseio.com/users/.json";
    loginUrl = "https://foodreviewappdb-default-rtdb.firebaseio.com/login/.json";

    async fetchPost(){
       const response = await fetch(this.postUrl);
       const data = await response.json();
       console.log(data);
       return data;
    }

    async fetchUser(){
        const response = await fetch(this.userUrl);
        const data = await response.json();
        console.log(data);
        return data;
     }

     async fetchLogin(){
        const response = await fetch(this.loginUrl);
        const data = await response.json();
        console.log(data);
        return data;
     }

}
const dbT = new db();
export default dbT;

