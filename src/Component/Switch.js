import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const Switchs = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
    <Switch
        trackColor={{ false: "#767577", true: "#636363" }}
        thumbColor={isEnabled ? "#9DC183" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}


export default Switchs;