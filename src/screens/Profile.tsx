import React from 'react';
import { Button } from 'react-native';
import { View } from '~/react-native';
import supabase from '~/services/supabase';

const Profile = () => {
  const logout = React.useCallback(() => {
    supabase.auth.signOut();
  }, []);
  return (
    <View>
      <Button onPress={logout} title="Logout" />
    </View>
  );
};

export default Profile;
