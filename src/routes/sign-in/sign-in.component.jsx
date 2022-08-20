import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../util/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up/sign-up.component";
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        createUserDocumentFromAuth(user) 
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <SignUpForm/>
        </div>
    )
}
export default SignIn