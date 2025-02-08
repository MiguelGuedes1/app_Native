import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  const TabIcon = ({ iconName, color, name, focused }) => {
    return (
      <View className="flex flex-col items-center justify-center gap-1">
        <Ionicons name={iconName} size={24} color={color} />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-[11px]`}
          style={{
            color: color,
            textAlign: 'center',
            width: 60,
            flexWrap: 'nowrap',
          }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 0,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon iconName="home-outline" color={color} name="Home" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="reviews"
        options={{
          title: "Reviews",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon iconName="bookmark-outline" color={color} name="Reviews" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="myreferences"
        options={{
          title: "My references",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon iconName="add-circle-outline" color={color} name="References" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon iconName="person-outline" color={color} name="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
