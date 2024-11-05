import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

function ProfileScreen() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Name: {profile.name}</Text>
      <Text>Email: {profile.email}</Text>
    </View>
  );
}

export default ProfileScreen;
