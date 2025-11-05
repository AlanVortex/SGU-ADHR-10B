import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { getUsers, createUser, updateUser, deleteUser } from "./services/userService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "" });

  const loadUsers = () => getUsers().then(res => setUsers(res.data));

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    form.id ? await updateUser(form.id, form) : await createUser(form);
    setForm({ fullName: "", email: "", phone: "" });
    loadUsers();
  };

  const clearEdit = () => setForm({ fullName: "", email: "", phone: "" });
  const onEdit = (u) => setForm(u);

  const onDeleteUser = async (id) => {
    if (confirm("¿Eliminar usuario?")) {
      await deleteUser(id);
      loadUsers();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Usuarios</h1>

      <div className="w-full max-w-4xl space-y-6">
        <UserForm
          onSubmit={onSubmit}
          editingUser={form.id}
          clearEdit={clearEdit}
          form={form}
          setForm={setForm}
        />

        <UserTable users={users} onEdit={onEdit} onDelete={onDeleteUser} />
      </div>
    </div>
  );
}
