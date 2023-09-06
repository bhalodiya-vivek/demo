import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback} from 'react';

import {ButtonTypes} from '../../types/components/Button';
import {COLORS} from '../../theme/Colors';

const Button = ({
  onPress = () => {},
  title,
  customLabelStyle = {},
  disabled = false,
  loading = false,
  icon,
  containerStyle = {},
  loaderProps = {},
}: ButtonTypes) => {
  const getView = useCallback(() => {
    let ele = null;
    if (loading) {
      ele = (
        <ActivityIndicator
          color={COLORS.COMPONENTS.BUTTON.LOADER_COLOR}
          {...loaderProps}
        />
      );
    } else if (icon) {
      ele = (
        <View style={styles.row}>
          <View>{icon}</View>
          <Text
            style={[
              styles.buttonText,
              {
                marginLeft: 10,
                color: disabled
                  ? COLORS.COMPONENTS.BUTTON.DESABLE_TEXT_COLOR
                  : COLORS.COMPONENTS.BUTTON.TEXT_COLOR,
              },
              customLabelStyle,
            ]}>
            {title}
          </Text>
        </View>
      );
    } else {
      ele = (
        <Text
          style={[
            styles.buttonText,
            {
              color: disabled
                ? COLORS.COMPONENTS.BUTTON.DESABLE_TEXT_COLOR
                : COLORS.COMPONENTS.BUTTON.TEXT_COLOR,
            },
            customLabelStyle,
          ]}>
          {title}
        </Text>
      );
    }
    return ele;
  }, [loading, icon, title, disabled, {...loaderProps}]);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.parent,
        {
          backgroundColor: disabled
            ? COLORS.COMPONENTS.BUTTON.DESABLE_COLOR
            : COLORS.COMPONENTS.BUTTON.COLOR,
        },
        containerStyle,
      ]}>
      {getView()}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  buttonDisbaled: {},
});
