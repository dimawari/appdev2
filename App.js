import { Button } from "@react-navigation/elements";
import {
  createStaticNavigation,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View } from "react-native";

function HomeScreen({ route }) {
  const navigation = useNavigation();

  React.useEffect(() => {
    if (route.params?.post) {
      alert("New post: " + route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("CreatePost")}>
        Create post
      </Button>

      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: "Hello from CreatePost!" },
            merge: true,
          });
        }}
      >
        Done (send back to Home)
      </Button>
    </View>
  );
}

function DetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { itemId } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>

      <Button
        onPress={() =>
          navigation.setParams({
            itemId: Math.floor(Math.random() * 100),
          })
        }
      >
        Update itemId
      </Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    CreatePost: CreatePostScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
