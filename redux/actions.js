import axios from 'axios';

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
