import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import userServices from "../services/userServices";

const Profile = () => {

    const { user } = useLoaderData();
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(user ? user.data.user.name : "");
    const [email, setEmail] = useState(user ? user.data.user.email : "");
  const [profilePicture, setProfilePicture] = useState(user.data.user.profilePicture || 'https://www.gravatar.com/avatar/');
  
  useEffect(() => {
    console.log(user);
    console.log('http://localhost:3001/'+profilePicture);
  }, [user])
  
  
    const editProfile = async () => {
        setEdit(!edit);

        if (edit) {
            // save the profile
            await userServices.updateProfile(name, email)
            alert("Profile updated successfully");
        }
    }
    
  const updateProfilePicture = async (e) => {
    // get the file
    const file = e.target.files[0];
    // create a form data
    const formData = new FormData();
    // append the file to the form data
    formData.append('profilePicture', file);

    // make a request to the server
    userServices.setProfilePicture(formData)
      .then(response => {
        // update the profile picture
        setProfilePicture(response.data.user.profilePicture);
        alert("Profile picture updated successfully")
      })
      .catch(error => {
        alert("Profile picture update failed");
      })
  }

  return (
    <div>
      <div className="profile">
        <img
          src={profilePicture ? 'http://localhost:3001/'+profilePicture : 'https://www.gravatar.com/avatar/'}
          alt="profile" 
        />
        <input
          type="file" 
          id="profile"
          accept="image/*"
          onChange={updateProfilePicture}
          />
        </div>

          <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" 
                        disabled={!edit}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" 
                        disabled={!edit}
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
              </div>
              <button className="btn btn-primary" onClick={editProfile}>{ edit ? 'Save' : 'Edit' }</button>
    </div>
  )
}

export default Profile;