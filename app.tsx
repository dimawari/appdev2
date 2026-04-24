import { Button } from "@react-navigation/elements";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View } from "react-native";

import { RootStackParamList } from "./types";

// Create typed navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// ----------- Home Screen -----------
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();

  React.useEffect(() => {
    if (route.params?.post) {
      alert("New post: " + route.params.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("CreatePost")}>
        Create post
      </Button>

      <Text style={{ margin: 10 }}>
        Post: {route.params?.post ?? "No post yet"}
      </Text>
    </View>
  );
}

// ----------- Create Post Screen -----------
type CreatePostNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "CreatePost"
>;

function CreatePostScreen() {
  const navigation = useNavigation<CreatePostNavProp>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => {
          navigation.navigate("Home", {
            post: "Hello from CreatePost!",
          });
        }}
      >
        Done (send back to Home)
      </Button>
    </View>
  );
}

// ----------- Details Screen -----------
type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;
type DetailsNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;

function DetailsScreen() {
  const navigation = useNavigation<DetailsNavProp>();
  const route = useRoute<DetailsRouteProp>();

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

// ----------- App Root -----------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}