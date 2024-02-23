import { loginUser, fetchUserProfile } from '../reducers/user';
import axios from 'axios';

export const loginUserAsync = (email, password) => async dispatch => {
  try {
    const loginResponse = await axios.post('http://localhost:3001/api/v1/user/login', {
      email,
      password,
    });

    if (loginResponse.status === 200) {
      const token = loginResponse.data.token;
      dispatch(loginUser({ token, userData: loginResponse.data.body }));


      try {
        const profileResponse = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
          headers: {
            'Authorization': `Bearer ${loginResponse.data.body.token}`
          }
        });

        if (profileResponse.status === 200) {
          
          console.log(profileResponse.data.body, "profile response");
           dispatch(fetchUserProfile(profileResponse.data.body));

         
        } else {
          console.error('Failed to retrieve user profile. Status:', profileResponse.status);
        }
      } catch (error) {
        console.error('User profile retrieval error:', error.message);
      }
    } else {
      console.error('Login failed. Status:', loginResponse.status);
    }
  } catch (error) {
    console.error('Login error:', error.message);
  }
};

export const updateUserProfile = (newFirstName, newLastName, token) => async dispatch => {
  try {
    const response = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      {
        firstName: newFirstName,
        lastName: newLastName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    if (response.status === 200) {
      dispatch(fetchUserProfile(response.data.body)); 
      console.log('Profil utilisateur mis à jour avec succès:', response.data);
    } else {
      console.error('Erreur lors de la mise à jour du profil utilisateur:', response.status);
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil utilisateur:', error.message);
  }
};