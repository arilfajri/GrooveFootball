import NavbarAdmin from "../component/NavbarAdmin";
import { Link } from "react-router-dom";
function Detail() {
  return (
    <div>
      <NavbarAdmin />
      <div className="flex justify-center items-center p-10">
        <table className=" mt-9">
          <tbody>
            <tr>
              <td className=" w-60 px-6 py-4 whitespace-no-wrap font-bold text-base">
                Nama Teknik{" "}
              </td>
              <td className="w-1 px-6 py-4 whitespace-no-wrap">:</td>
              <td className="px-6 py-4 whitespace-no-wrap flex gap-2">Mudah</td>
            </tr>
            <tr>
              <td className=" w-60 px-6 py-4 whitespace-no-wrap font-bold text-base">
                Tingkat Kesulitan
              </td>
              <td className="w-1 px-6 py-4 whitespace-no-wrap">:</td>
              <td className="px-6 py-4 whitespace-no-wrap flex gap-2">Mudah</td>
            </tr>
            <tr>
              <td className=" w-60 px-6 py-4 whitespace-no-wrap font-bold text-base">
                Deskripsi Teknik
              </td>
              <td className="w-1 px-6 py-4 whitespace-no-wrap">:</td>
              <td className="px-6 py-4 whitespace-no-wrap flex gap-2 text-justify">
                Dribbling dalam permainan sepak bola juga dapat diartikan
                sebagai teknik membawa bola dan mengubah arah dengan
                sentuhan-sentuhan kaki yang cepat.
              </td>
            </tr>
            <tr>
              <td className=" w-60 px-6 py-4 whitespace-no-wrap font-bold text-base">
                Foto
              </td>
              <td className="w-1 px-6 py-4 whitespace-no-wrap">:</td>
              <td className="px-6 py-4 whitespace-no-wrap flex gap-2">
                <img
                  src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="w-[300px]"
                />
              </td>
            </tr>
            <tr>
              <td className=" w-60 px-6 py-4 whitespace-no-wrap font-bold text-base">
                Video
              </td>
              <td className="w-1 px-6 py-4 whitespace-no-wrap">:</td>
              <td className="px-6 py-4 whitespace-no-wrap flex gap-2">
                <img
                  src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="w-[300px]"
                />
              </td>
            </tr>
            <tr>
              <td className=" w-60 px-6 py-4 whitespace-no-wrap font-bold text-base">
                Deskripsi Video
              </td>
              <td className="w-1 px-6 py-4 whitespace-no-wrap">:</td>
              <td className="px-6 py-4 whitespace-no-wrap flex gap-2 text-justify">
                Dribbling dilakukan dengan cara menendang atau melakukan
                sentuhan ringan terhadap bola, sehingga bola bergerak menyusur
                tanah. Terdapat 3 macam dribbling yaitu, menggunakan kaki bagian
                luar, bagian dalam, dan bagian punggung kaki.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex max-sm:items-center max-sm:justify-center pl-16 pb-10">
        <Link to={"/dashboard"}>
          <button
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase sm:w-52 w-max"
            type="submit"
          >
            kembali
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
