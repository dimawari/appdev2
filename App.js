import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Link to={{ screen: "Details" }}>Go to Details (Link)</Link>

      <Button onPress={() => navigationRef.navigate("Details")}>
        Go to Details (Button)
      </Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",

  screenOptions: {
    headerStyle: { backgroundColor: "tomato" },
  },

  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Overview",
      },
    },
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
