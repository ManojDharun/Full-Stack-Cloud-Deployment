interface formInterface{
    name:string;
    email:string;
    password:string
}
function Register(){
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const formToSend:formInterface = {
            name : formData.get("name") as string,
            email : formData.get("email") as string,
            password : formData.get("password") as string
        }
        fetch("http://localhost:8080/addUser",{
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formToSend),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        }).catch((error) => {
            console.error("Error fetching data: ", error);
        })
    }
    return (
        <form onSubmit = {handleSubmit} className = "ml-5 mt-5">
        <link rel = "stylesheet" href = "Design.css"></link> 
        <div className =" form-group row">
            <div className ="col-sm-5">
                <input name = "name" type="text" placeholder="UserName" className ="form-control"></input>
            </div>
        </div>
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
                <button type="submit" className ="btn btn-primary btn-block">Sign Up</button>
            </div>
        </div>
    </form>
    )
}

export default Register;