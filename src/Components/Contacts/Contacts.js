export default function Contacts({ contacts }) {
  return (
    <div>
      <h2>Contacts:</h2>
      <ul>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
