export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">Email</th>
            <th className="p-3">Teléfono</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={u.id} className="border-b hover:bg-gray-100 transition">
              <td className="p-3">{i + 1}</td>
              <td className="p-3">{u.fullName}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.phone}</td>

              <td className="p-3 flex gap-2 justify-center">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
                  onClick={() => onEdit(u)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                  onClick={() => onDelete(u.id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
