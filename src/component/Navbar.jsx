import { Button, Navbar } from "flowbite-react";

function Navvbar() {
  return (
    <div>
      <Navbar fluid className="bg-black text-white">
        <Navbar.Brand href="">
          <span className="self-center whitespace-nowrap text-xl font-bold text-red-700">
            Groove
          </span>
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            Football
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-red-700 font-bold">LOGIN</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" className="text-white hover:text-gray-700">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-gray-700">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-gray-700">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-gray-700">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white hover:text-gray-700">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navvbar;
