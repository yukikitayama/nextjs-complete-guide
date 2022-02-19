import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // Load data...
    // router.push('/clients/max/projecta');
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "yuki", clientprojectid: "projecta" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
