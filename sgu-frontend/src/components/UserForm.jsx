export default function UserForm({ onSubmit, editingUser, clearEdit, form, setForm }) {
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {editingUser ? "Editar Usuario" : "Agregar Usuario"}
      </h2>

      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="fullName"
          placeholder="Nombre completo"
          className="border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Correo electrónico"
          type="email"
          className="border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Teléfono"
          className="border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.phone}
          onChange={handleChange}
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md w-full"
          >
            {editingUser ? "Actualizar" : "Guardar"}
          </button>

          {editingUser && (
            <button
              type="button"
              onClick={clearEdit}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-md w-full"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
