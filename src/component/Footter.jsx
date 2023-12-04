import { Footer } from "flowbite-react";

function Footter() {
  return (
    <div>
      <Footer container bgDark className="bg-black rounded-none">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <span className="self-center whitespace-nowrap text-xl font-bold text-red-700">
              Groove
              <span className="text-xl font-bold text-white">Football</span>
            </span>

            <Footer.LinkGroup className="text-white gap-3 justify-center mt-2">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="#"
            by="GrooveFootball"
            year={2023}
            className="text-white"
          />
        </div>
      </Footer>
    </div>
  );
}

export default Footter;
