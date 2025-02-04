import { FormInput, SubmitBtn } from "@/components/global";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginUser } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";
import { toast } from "@/hooks/use-toast";
import { ReduxStore } from "@/store";
import { customFetch } from "@/utils";
import { AxiosResponse } from "axios";
import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useNavigate,
} from "react-router-dom";

export const action = (store: ReduxStore): ActionFunction => {
  return async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response: AxiosResponse = await customFetch.post(
        "/auth/local",
        data
      );
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(loginUser({ username, jwt }));
      toast({ description: "login successful" });
      return redirect("/");
    } catch (error) {
      console.log(error);
      toast({ description: "Login failed" });
      return null;
    }
  };
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post("auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });

      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({ description: "login failed" });
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-cneter">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput name="identifier" type="email" label="email" />
            <FormInput name="password" type="password" />
            <SubmitBtn text="login" className="w-full mt-4" />
            <Button
              type="button"
              variant={"outline"}
              className="w-full mt-4"
              onClick={loginAsGuestUser}
            >
              Guest user
            </Button>
            <p className="text-center mt-4">
              Not a member yet?
              <Button asChild variant={"link"}>
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
export default Login;
