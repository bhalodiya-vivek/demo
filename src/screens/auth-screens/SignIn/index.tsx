import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import Eye from '../../../assets/svg/Eye';
import HideEye from '../../../assets/svg/HideEye';
import MaterializedInput from '../../../components/MaterializedInput';
import Button from '../../../components/Button';
import {COLORS} from '../../../theme/Colors';
import {useAppDispatch} from '../../../store';
import {setIsUserSignedIn} from '../../../store/slice/authSlice';
import KeyboardAvoidingView from '../../../components/KeyboardAvoidingView';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <KeyboardAvoidingView>
      <View
        style={[
          styles.container,
          {
            backgroundColor: COLORS.APP.BACKGROUND_COLOR,
          },
        ]}>
        <MaterializedInput
          placeholder={'Email Address'}
          label={'Email Address'}
          value={email}
          onChangeText={setEmail}
        />
        <MaterializedInput
          placeholder={'Password'}
          label={'Password'}
          value={password}
          rightIcon={!showPassword ? Eye : HideEye}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          onRightIconClick={() => setShowPassword(state => !state)}
        />
        <Button
          title="Sign In"
          onPress={() => {
            dispatch(setIsUserSignedIn(true));
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});
