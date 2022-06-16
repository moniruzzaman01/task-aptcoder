import React, { useEffect, useState } from "react";

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
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [employee] = useState(name);
  const [modifiedList, setModifiedList] = useState([]);

  useEffect(() => {
    if (search) {
      const modifiedList = employee.filter(
        (list) => list.name.toLowerCase() === search.toLowerCase()
      );
      setModifiedList(modifiedList);
    } else if (filter) {
      const modifiedList = employee.filter((list) =>
        list.name.toLowerCase().includes(filter)
      );
      setModifiedList(modifiedList);
    } else if (sort === "1") {
      const sort = modifiedList.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setModifiedList([...sort]);
    } else if (sort === "2") {
      const sort = modifiedList.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setModifiedList([...sort]);
    } else {
      setModifiedList(employee);
    }
  }, [filter, sort, employee, search]);

  return (
    <div>
      <h1 className=" text-4xl my-5">Employee list</h1>
      <div className=" p-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          <input
            type="text"
            onKeyUp={(event) => setFilter(event.target.value)}
            placeholder="Filter"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            onKeyUp={(event) => setSearch(event.target.value)}
            placeholder="Search"
            className="input input-bordered w-full"
          />
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Area</span>
            </label>
            <select
              onChange={(event) => setSort(event.target.value)}
              className="select select-bordered"
              required
            >
              <option>Choose one</option>
              <option value="1">A-Z</option>
              <option value="2">Z-A</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {modifiedList.map((emp, index) => (
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
