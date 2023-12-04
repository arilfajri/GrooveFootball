import NavbarAdmin from "../component/NavbarAdmin";

function Edit() {
  return (
    <div>
      <NavbarAdmin />
      <form className="bg-white px-8 mt-20 sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="namateknik"
          >
            Nama Teknik
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Nama Teknik"
            type="text"
            placeholder="Nama Teknik"
            name="Nama Teknik"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="foto"
          >
            Foto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="foto"
            type="text"
            placeholder="Foto"
            name="foto"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="music">Mudah</option>
            <option value="tutorial">Susah</option>
            <option value="vlog">Sangat Susah</option>
          </select>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="video"
          >
            Video
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Video"
            type="text"
            placeholder="Video"
            name="Video"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="deskripsiTeknik"
          >
            Deskripsi Teknik
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deskripsiTeknik"
            placeholder="Deskripsi Teknik"
            name="deskripsiTeknik"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="deskripsiVideo"
          >
            Deskripsi Video
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deskripsiVideo"
            placeholder="Deskripsi Teknik"
            name="deskripsiVideo"
          />
        </div>
        <div className="flex max-sm:items-center max-sm:justify-center max-sm:col-span-2 py-5">
          <button
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase sm:w-52 w-max"
            type="submit"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
