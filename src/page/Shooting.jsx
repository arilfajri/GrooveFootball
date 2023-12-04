import Footter from "../component/Footter";
import Navvbar from "../component/Navbar";

function Shooting() {
  return (
    <div>
      <Navvbar />
      <div className="container mx-auto pt-10">
        <div className="md:flex py-10">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="lg:w-[400px] md:w-[300px] mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-2 py-2">
              <h1 className="text-2xl uppercase font-bold text-red-700">i</h1>
              <h1 className="text-2xl uppercase font-bold">Shooting</h1>
            </div>
            <p className="capitalize">tingkat kesulitan</p>
            <p className="text-justify lg:w-[400px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentials.
            </p>
          </div>
        </div>
        <h1 className="text-2xl uppercase font-bold text-center">Video</h1>
        <img
          src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="md:w-[800px] md:h-[400px] mx-auto py-10"
        />
        <p className="text-justify lg:w-[800px] mx-auto pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentials.
        </p>
      </div>
      <Footter />
    </div>
  );
}

export default Shooting;
