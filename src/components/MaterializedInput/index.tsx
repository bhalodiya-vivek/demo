import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Animated,
  Text,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';

import {MaterializedInputTypes} from '../../types/components/MaterializedInputTypes';
import {COLORS} from '../../theme/Colors';

const MaterializedInput = ({
  parentStyle = {},
  containerStyle = {},
  textInputStyle = {},
  leftIcon,
  rightIcon,
  onLeftIconClick = () => {},
  onRightIconClick = () => {},
  customLeftIconStyle = {},
  customRightIconStyle = {},
  multiline = false,
  label,
  labelStyle = {},
  labelContainerStyle = {},
  placeholder = '',
  ...props
}: MaterializedInputTypes) => {
  const [isFocused, setIsFocused] = useState(false);
  const opacity = useMemo(() => new Animated.Value(0), []);

  const getInputStyle = useMemo(() => {
    if (isFocused) {
      return [
        styles.input,
        {
          backgroundColor:
            COLORS.COMPONENTS.MATERIALIZED_INPUT.BACKGROUND_COLOR,
          borderColor: COLORS.COMPONENTS.MATERIALIZED_INPUT.ACTIVE_BORDER_COLOR,
        },
        containerStyle,
      ];
    } else {
      return [
        styles.input,
        {
          backgroundColor:
            COLORS.COMPONENTS.MATERIALIZED_INPUT.BACKGROUND_COLOR,
          borderColor:
            COLORS.COMPONENTS.MATERIALIZED_INPUT.INACTIVE_BORDER_COLOR,
        },
        containerStyle,
      ];
    }
  }, [isFocused, containerStyle]);

  const getLabelStyle = useMemo(
    () => [
      styles.label,
      {
        color: COLORS.COMPONENTS.MATERIALIZED_INPUT.LABEL_COLOR,
        backgroundColor: COLORS.COMPONENTS.MATERIALIZED_INPUT.BACKGROUND_COLOR,
      },
      labelStyle,
    ],
    [labelStyle],
  );

  const getLabelContainerStyle = useMemo(
    () => [
      styles.labelContainer,
      {
        opacity: opacity,
      },
      labelContainerStyle,
    ],
    [labelContainerStyle],
  );

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isFocused ? 1 : 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  return (
    <View style={[styles.container, parentStyle]}>
      <Animated.View style={getLabelContainerStyle}>
        <Text style={getLabelStyle}>{label}</Text>
      </Animated.View>
      <View style={getInputStyle}>
        {leftIcon ? (
          <Pressable style={customLeftIconStyle} onPress={onLeftIconClick}>
            {leftIcon}
          </Pressable>
        ) : null}

        <TextInput
          style={[
            styles.textInput,
            {
              color: COLORS.COMPONENTS.MATERIALIZED_INPUT.TEXT_COLOR,
            },
            textInputStyle,
          ]}
          textAlignVertical={multiline ? 'top' : 'auto'}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={
            COLORS.COMPONENTS.MATERIALIZED_INPUT.PLACEHOLDER_COLOR
          }
          underlineColorAndroid="transparent"
          autoComplete={'off'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {rightIcon ? (
          <Pressable style={customRightIconStyle} onPress={onRightIconClick}>
            {rightIcon}
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default MaterializedInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 53,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    justifyContent: 'center',
    fontWeight: '600',
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  labelContainer: {
    zIndex: 1,
    marginBottom: -18,
    marginLeft: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
