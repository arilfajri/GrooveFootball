import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  return (
    <div>
      <Navbar fluid className="bg-white shadow fixed z-50 w-full top-0">
        <Navbar.Brand href="/dashboard">
          <span className="self-center whitespace-nowrap text-xl font-bold text-red-700">
            Groove
          </span>
          <span className="self-center whitespace-nowrap text-xl font-bold">
            Football
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="font-bold uppercase" color="red">
            <Link to={"/"}>logout</Link>
          </Button>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarAdmin;
