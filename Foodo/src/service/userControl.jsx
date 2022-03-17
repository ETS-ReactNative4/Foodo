
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
               
                console.log('succes:', this.loggedUser);
              //  const user = JSON.stringify(this.loggedUser);
                //localStorage.setItem("user", user);
                
                
            }else{
                console.log('failure');
            }
        }

    }

    async getLoggedUser(){
        
        const user = await JSON.parse(localStorage.getItem("user"));
        console.log(user);
        
        return user;
    }

}

const uc = new userControl();
export default uc;