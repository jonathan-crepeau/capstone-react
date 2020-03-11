import React from 'react';
import axios from 'axios'''

import './Profile.css';

class Profile extends React.Component {
  state = {
    myPosts: [],
    purchased: []
    profileInfo: []
  }

  // componentdidmount
  // Axios call to Posts db -- find by author ID that matches current user
  // Axios call to Orders db -- find where 'sellPost' id.UserID is current user

  //render
  // section to hold all profile information except for password
  // post list (there will be two buttons that show this information -- might be easier to split onto seperate pages)

}

export default Profile;