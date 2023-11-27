import { Footer } from "flowbite-react";

function Home() {
  return (
    <div>
      <div className="md:h-96 h-72 relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full object-cover md:h-96 md:w-full lg:w-full lg:h-full h-72 brightness-50"
        />
        <div className="text-white text-center absolute">
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold uppercase">
            Train
          </h1>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold uppercase">
            LIKE A{" "}
            <span className="lg:text-5xl md:text-3xl text-2xl font-bold uppercase text-red-700">
              CHAMP
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="p-12 text-justify">
        <h1 className="text-2xl text-center font-semibold">Lorem Ipsum</h1>
        <p className="pt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="bg-black h-50 justify-center items-center flex h-44">
        <h1 className="text-white text-center lg:text-5xl md:text-3xl text-2xl font-bold uppercase">
          Never{" "}
          <span className="text-red-700 text-center lg:text-5xl md:text-3xl text-2xl font-bold uppercase">
            Give
          </span>{" "}
          up
        </h1>
      </div>
      <div className="container mx-auto py-5">
        <h1 className="text-2xl text-center font-semibold">Lorem Ipsum</h1>
        <div className="md:flex justify-center gap-12 pt-5">
          <div className="mb-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-44 h-44 rounded-full mx-auto"
            />
          </div>
          <div className="mb-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-44 h-44 rounded-full mx-auto"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-44 h-44 rounded-full mx-auto"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-12 py-5">
          <div className="mb-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-44 h-44 rounded-full mx-auto"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-44 h-44 rounded-full mx-auto"
            />
          </div>
        </div>
      </div>
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

export default Home;
