// frontend/src/components/UserCard.jsx
export default function UserCard({ user }) {
  return (
    <div className="p-4 border rounded mb-2">
      <h2 className="font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <span>{user.role}</span>
    </div>
  );
}
