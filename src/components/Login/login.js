import { signInWithGoogle } from "../../firebase";

const Login = () => {
  return (
    <div className="dashboard">
      <button className="btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login;