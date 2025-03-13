import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed'; 

export default function TaskItem({ task }) {

  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckBoxPress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBox
      checked={isChecked}  
      onPress={handleCheckBoxPress}  
      title={task.title}
      iconType="material-community"
      checkedIcon="checkbox-marked-outline"
      uncheckedIcon="checkbox-blank-outline"
      checkedColor="#387838"
      uncheckedColor="#323332"
      containerStyle={{ backgroundColor: "#cfdffa", borderRadius: 4, borderWidth: 0 }}
      textStyle={isChecked ? { textDecorationLine: "line-through",  color: "#323332"} : {}}
    />
  );
}
