const UserDetails = () => {
  const userDetails = [
    {
      id: 1,
      name: "Hugo",
      profession: "Front-End developer",
      age: 24,
    },
    {
      id: 2,
      name: "José",
      profession: "Back-End developer",
      age: 17,
    },
  ];

  console.log(userDetails);
  return (
    <div>
      <ul>
        {userDetails.map((detail) => (
          <div>
            <li key={detail.id}>
              Nome: {detail.name}/ Profissão: {detail.profession}/ Idade:{" "}
              {detail.age} -
              {detail.age >= 18
                ? " Pode tirar a carta de condução"
                : " Não pode tirar a carta de condução"}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
