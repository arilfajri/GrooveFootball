import NavbarAdmin from "../component/NavbarAdmin";
import { BsFillPenFill, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

function Dashboard() {
  const data = [
    { id: 1, name: "Dribbling" },
    { id: 2, name: "Tackling" },
    { id: 3, name: "Passing" },
    { id: 4, name: "Shooting" },
    { id: 5, name: "Stop" },
  ];

  return (
    <div>
      <NavbarAdmin />
      <div className="flex justify-center items-center h-screen">
        <table className="divide-y divide-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="w-16 px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="w-96 px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="w-16 px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.id}
                </td>
                <td className="w-96 px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex gap-2">
                  <div className="bg-[#00A3FF] hover:bg-[#006eff] h-8 w-8 flex items-center justify-center rounded">
                    <Link to={"/detail"}>
                      <BsEye color="white" />
                    </Link>
                  </div>
                  <div className="bg-[#FCC419] hover:bg-[#fcac19] h-8 w-8 flex items-center justify-center rounded">
                    <Link to="/edit">
                      <BsFillPenFill color="white" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
