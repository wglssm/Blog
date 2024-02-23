import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);
  const [lists, setLists] = useState([
    [10, 20] as number[],
    [5] as number[],
    [4] as number[],
    [2] as number[],
    [1] as number[],
  ]);

  function addTolist(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLists([[input], [], [], [], []]);
    let leastAmount = 1e9;
    let listWithLeast: number[];
    for (let list of lists) {
      const currentTotal = list.reduce((sum, value) => sum + value, 0);
      if (currentTotal < leastAmount) {
        leastAmount = currentTotal;
        listWithLeast = list;
      }
    }
    setInput(0);
    setLists((prevList) =>
      prevList.map((list) =>
        list === listWithLeast ? [...list, leastAmount] : list
      )
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLists((perviousList) =>
        perviousList.map((list) =>
          [list[0] - 1, ...list.slice(1)].filter((value) => value > 0)
        )
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <form onSubmit={addTolist}>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.currentTarget.valueAsNumber)}
            style={{ height: "30px", margin: "10px" }}
          ></input>
          <button> Checkout</button>
        </form>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {lists.map((list, index) => (
          <div key={index} className="list" style={{ margin: "20px" }}>
            X
            {list.map((listItem, index) => (
              <div key={index} className="listItem">
                {listItem}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
