import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import userServices from "../services/userServices";

const Profile = () => {

    const { user } = useLoaderData();
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(user ? user.data.user.name : "");
    const [email, setEmail] = useState(user ? user.data.user.email : "");

    const editProfile = async () => {
        setEdit(!edit);

        if (edit) {
            // save the profile
            await userServices.updateProfile(name, email)
                .then(response => {
                    alert("Profile updated successfully");
                })
                .catch(error => {
                    alert("Profile update failed");
                })
        }
    }
  return (
      <div>
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