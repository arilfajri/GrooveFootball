import { Button, Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-3xl font-bold mb-4 text-white uppercase">
        Login{" "}
        <span className="text-3xl font-bold mb-4 uppercase text-red-700">
          form
        </span>
      </h1>
      <Card className="md:w-3/12 mx-auto">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Username" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>

          <Button type="submit" color="dark" className="uppercase">
            <Link to={"/dashboard"}>Login</Link>
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
