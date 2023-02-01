import AuthUser from "@/pages/auth";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/slice/auth/authSlice";
import jwtDecode from "jwt-decode";
import { NextComponentType } from "next";

function withAuth(Component: NextComponentType) {
  const Auth = (props: JSX.IntrinsicAttributes) => {
    const user: any = useAppSelector(selectCurrentUser);

    // If user is not logged in, return login component
    if (!user?.token) {
      return <AuthUser />;
    }

    if (user.token) {
      const token = user.token.split(" ")[1];
      const data: any = jwtDecode(token);
      if (!data._id) {
        return <AuthUser />;
      }
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
