import React from "react";

const Table = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Submitted Data</h2>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Language</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{entry.name}</td>
              <td className="border px-4 py-2">{entry.gender}</td>
              <td className="border px-4 py-2">{entry.language}</td>
              <td className="border px-4 py-2">{entry.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
