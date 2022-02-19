import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "yuki", name: "Yuki" },
    { id: "max", name: "Max" },
    { id: "tomoki", name: "Tomoki" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {/* <li><Link href="/clients/yuki">Yuki</Link></li> */}
        {/* <li><Link href="/clients/max">Max</Link></li> */}
        {/* {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))} */}
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
