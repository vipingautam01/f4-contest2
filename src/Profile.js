import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import "./App.css";


const Profile = () => {
    const [userDetails, setUserDetails] = useState("");
    let navigate = useNavigate(); 

    useEffect(() => {

        let obj = JSON.parse(localStorage.getItem("userObject"));
        let id = "";
        if(!obj){
            alert("Login to view Profile page");
            navigate('/');
            return;
        }else{
            id = obj.id;
        }
        
        async function getUserDetails(){
            await fetch(`https://dummyjson.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("userDetails", JSON.stringify(data))
                setUserDetails(data)
            })
            .catch((err) => alert(`${err}`))
        }

        getUserDetails();
    }, [])

    


    return(
         
        <div className="whole">
            <div className="card">
                <div className="img-cont">
                    <img src = {userDetails.image} alt = "img" className="profile-pic"/>
                    <h1>{userDetails.firstName} {userDetails.lastName}</h1>
                    <h3>Age : {userDetails.age}yrs</h3>
                </div>

                <div className="details-cont">
                    <div className="each-details">
                        <h1>Personal Details</h1>

                        <h3><span>BirthDate : </span>{userDetails.birthDate}</h3>
                        <h3><span>BloodGroup : </span>{userDetails.bloodGroup}</h3>
                        <h3><span>Gender : </span>{userDetails.gender}</h3>
                        <h3><span>Phone : </span>{userDetails.phone}</h3>
                        <h3><span>University : </span>{userDetails.university}</h3>
                        <h3><span>Username : </span>{userDetails.username}</h3>
                        <h3><span>Password : </span>{userDetails.password}</h3>
                        

                    </div>
                    

                    <div className="each-details">  
                        <h1>Connection Details</h1>

                        <h3><span>Domain Name : </span>{userDetails.domain}</h3>
                        <h3><span>IP : </span>{userDetails.ip}</h3>
                        <h3><span>Mac Address : </span>{userDetails.macAddress}</h3>
                        <h3><span>ssn : </span>{userDetails.ssn}</h3>
                        <h3><span>User Agent : </span>{userDetails.userAgent}</h3>
                    </div>
                </div>

            </div>
        </div> 

        
    )
}

export default Profile;