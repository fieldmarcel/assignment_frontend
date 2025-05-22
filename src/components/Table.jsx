import React from "react";
const Table = ({ data }) => {
 


  return (
    <div className="p-4">
        {data.length >0 && 
      <div className="overflow-x-auto w-full">
        <table className="min-w-[600px] w-full border border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Gender</th>
              <th className="border px-3 py-2 text-left">Language</th>
              <th className="border px-3 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className="text-left">
                <td className="border px-3 py-2">{entry.name}</td>
                <td className="border px-3 py-2">{entry.gender}</td>
                <td className="border px-3 py-2">{entry.language}</td>
                <td className="border px-3 py-2">{entry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
      
    </div>
  );
};

export default Table;
