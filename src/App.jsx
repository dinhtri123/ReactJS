import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const dataJson = await response.json();
      setData(dataJson);
    };
    fecthData();
  }, []);

  return (
    <>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id} className="test">
            <p>STT: {item.id}</p>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
          </div>
        ))}
    </>
  );
}

export default App;
