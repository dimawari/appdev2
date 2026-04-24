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

// 👇 import your types
import { RootStackParamList } from "./types";

// 👇 type the stack
const Stack = createNativeStackNavigator<RootStackParamList>();

// -------- Home Screen --------
type HomeRouteProp = RouteProp<RootStackParamList, "Home">;
type HomeNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

function HomeScreen({ route }: { route: HomeRouteProp }) {
  const navigation = useNavigation<HomeNavProp>();

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

// -------- Create Post --------
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

// -------- Details --------
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

// -------- App Root --------
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