import { FormInput } from "@/components/global";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/utils";
import { AxiosError } from "axios";
import { ActionFunction, Form, Link, redirect } from "react-router-dom";

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const result = await customFetch.post("/auth/local/register", data);
    console.log(result);

    toast({ description: "Registered" });
    return redirect("/login");
  } catch (error) {
    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : "registration falided";
    toast({ description: errorMsg });
    console.log(error);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <FormInput type="text" name="username" />
            <FormInput type="email" name="email" />
            <FormInput type="password" name="password" />
            <Button type="submit" className="w-full mt-4">
              submit
            </Button>
          </Form>

          <p className="text-center mt-4">
            Already a member?{" "}
            <Button asChild variant={"link"}>
              <Link to="/login">login</Link>
            </Button>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
export default Register;
