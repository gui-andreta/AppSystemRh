import {NavigationContainer} from "@react-navigation/native";

import Routes from "./routes";
import SignIn from "./pages/SingIn";

export default function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}
