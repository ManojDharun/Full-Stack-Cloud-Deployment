import './Design.css';
import {useNavigate} from 'react-router-dom';
interface formInterface{
    name : string;
    email : string;
    password : string;
}
function LoginForm() {
    const navigate = useNavigate();
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const dataToSend:formInterface = {
            name : formData.get("email") as string,
            email : formData.get("email") as string,
            password : formData.get("password") as string,
        }
        fetch("http://localhost:8080/formData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data,typeof(data));
            if (Array.isArray(data) && data.includes("You are allowed")) {
                navigate('/Dashboard');
                
              } else {
                // The user is not allowed
                console.log("Sorry you are not allowed!!");
            }
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }
    return (
        <form className = "ml-5 mt-5" onSubmit={handleSubmit}>
            <link rel = "stylesheet" href = "Design.css"></link> 
            <div className =" form-group row">
                <div className ="col-sm-5">
                    <input name = "email" type="email" placeholder="Email Address" className ="form-control"></input>
                </div>
            </div>
            <div className ="form-group row">
                <div className ="col-sm-5">
                    <input name = "password" type="password" placeholder="Password" className ="form-control"></input>
                </div>
            </div>
            <div className ="form-group row mt-4">
                <div className ="col-sm-5">
                    <button type="submit" className ="btn btn-primary btn-block">Sign in</button>
                </div>
            </div>
        </form>
    )
}
export default LoginForm;