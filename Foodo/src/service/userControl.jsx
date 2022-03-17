
import dbT from "./service.jsx";

class userControl{
    loggedUser;

    async login(mail, pass){
        console.log('login is running');
        const data = await dbT.fetchLogin();

        
           
            // map object into an array with objects
            const userLogin = Object.keys(data).map((key) => ({
              key: key,
              ...data[key],
            }));
            
         
          

        console.log(userLogin);
        for(const login of userLogin){
            if(login.email == mail && login.password == pass){
                this.loggedUser = await dbT.getSingleUser(login.uid);
                localStorage.setItem("user", this.loggedUser);
                console.log('succes:', this.loggedUser);
                return this.loggedUser;
            }else{
                console.log('failure');
            }
        }

    }

    getLoggedUser(){
        const user = localStorage.getItem("user");
        console.log(localStorage.getItem("user"));
        return user;
    }

}

const uc = new userControl();
export default uc;