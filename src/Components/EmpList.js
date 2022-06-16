import React from "react";

const EmpList = () => {
  const name = [
    {
      name: "Caroline Ankunding Jr.",
    },
    {
      name: "Deondre Cole Sr.",
    },
    {
      name: "Madisen Thompson",
    },
    {
      name: "Raphaelle Crooks",
    },
    {
      name: "Gerhard Kub",
    },
    {
      name: "Leonard Leannon",
    },
    {
      name: "Anderson Okuneva",
    },
    {
      name: "Jadon Gaylord",
    },
    {
      name: "Karelle Lynch",
    },
    {
      name: "Aliya Rath",
    },
    {
      name: "Markus Kuhn",
    },
    {
      name: "Mrs. Rosalyn Larson",
    },
    {
      name: "Ross Hoppe",
    },
    {
      name: "Amari Hodkiewicz DVM",
    },
    {
      name: "Sallie Wiegand",
    },
    {
      name: "Jaleel Hilpert",
    },
    {
      name: "Mr. Kian Marvin",
    },
    {
      name: "Leland Simonis",
    },
    {
      name: "Lane Willms",
    },
    {
      name: "Fernando Padberg",
    },
    {
      name: "Rico Lynch",
    },
    {
      name: "Alberto Mills",
    },
    {
      name: "Rose McLaughlin DVM",
    },
    {
      name: "Cale Jakubowski",
    },
    {
      name: "Miss Josiane Bins",
    },
    {
      name: "Teresa Buckridge",
    },
    {
      name: "Devonte Mohr",
    },
    {
      name: "Miss Ole Wilkinson",
    },
    {
      name: "Federico Osinski MD",
    },
    {
      name: "Vladimir McDermott",
    },
    {
      name: "Sibyl Eichmann",
    },
    {
      name: "Patsy Goodwin",
    },
    {
      name: "Nicole Thiel",
    },
    {
      name: "Monroe Deckow",
    },
    {
      name: "Xander Hills",
    },
    {
      name: "Fabiola Daugherty",
    },
    {
      name: "Kacey Gislason",
    },
    {
      name: "Dexter Kuhn",
    },
    {
      name: "Albina Kassulke I",
    },
    {
      name: "Earnestine Ortiz",
    },
    {
      name: "Julio Bednar",
    },
    {
      name: "Keegan Bode",
    },
    {
      name: "Conner Dickens",
    },
    {
      name: "August Effertz",
    },
    {
      name: "Dr. Anjali Volkman",
    },
    {
      name: "Augusta Hickle",
    },
    {
      name: "Jordyn Hermiston",
    },
    {
      name: "Shannon Wilderman III",
    },
    {
      name: "Madge Mohr",
    },
    {
      name: "Cyril Lindgren",
    },
  ];

  return (
    <div>
      <h1 className=" text-4xl my-5">Employee list</h1>
      <div className=" p-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {name.map((emp, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{emp.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpList;
