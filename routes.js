import SignUp from "./view/signup.js";
import SignIn from "./view/signin.js";
import Dashboard from "./view/dashboard.js";

const routes = [
    { path: '/', view: SignUp },
    { path: '/signin', view: SignIn },   
    { path: '/dashboard', view: Dashboard }
]
export default routes;