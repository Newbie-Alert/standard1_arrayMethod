import { useState } from "react";
import "./App.css";

function App() {
  // STATES
  const initialState = ["banana", "apple", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState();
  const [query, setQuery] = useState(""); // input 값

  // STYLES
  const buttonBoxStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginBlock: "1rem",
    alignItems: "center",
  };

  const boxStyle = {
    padding: "1rem",
    border: "1px solid black",
    marginBlock: "1rem",
  };

  const spanStyle = {
    fontSize: "1.2rem",
    marginLeft: "0.65rem",
  };

  // FUNCTIONS
  const doForEach = () => {
    let done = "";
    array.forEach((item, index) => {
      done += `${index}: ${item}, `;
    });
    setResult(done);
    setQuery("");
  };

  // 중요!!!!!!!!!!
  const doFilter = () => {
    if (query.length === 0) {
      alert("찾으시려는 값을 입력하세요");
    } else {
      let filtered = array.filter((item) => item.includes(query));
      setResult(filtered.join(", "));
      setQuery("");
    }
  };

  // 중요!!!!!!!!!!
  const doMap = () => {
    let mapped = array.map((item) => item.toUpperCase());
    setResult(mapped.join(", "));
    setQuery("");
  };

  // acc는 별도 설정 없으면 0번 인덱스 요소, cur은 1번 인덱스
  const doReduce = () => {
    let reduced = array.reduce((acc, cur) => {
      return `${acc} + ${cur}`;
    });
    setResult(reduced);
    setQuery("");
  };

  const doPush = () => {
    if (query.length === 0) {
      alert("추가 하시려는 값을 입력하세요");
    } else {
      setResult([...array, query].join(", ")); // array를 복제해서, 인풋 값을 추가
      setQuery("");
    }
  };

  const doPop = () => {
    let copy = [...array]; // 불변성을 지키기 위해 array를 복제
    copy.pop(); // 복제 된 데이터를 변경
    setResult(copy.join(", ")); // 변경 된 복제 데이터를 setResult() 함수를 통해 업데이트.
    setQuery("");
  };

  const doSlice = () => {
    setResult(array.slice(1, 4).join(", ")); // 시작 인덱스부터 몇 번째 인덱스까지 뽑아낼 것인가, 원본 데이터를 복사하여 추출해서 원본 데이터가 유지 됨.
    setQuery("");
  };

  const doSplice = () => {
    setResult(array.splice(2, 2).join(", ")); // 시작 인덱스부터 몇 개를 뽑아낼 것인가, 원본 데이터에서 직접 추출해내서 원본 데이터가 변경 됨.
    setQuery("");
  };

  const findIndexOf = () => {
    if (query.length === 0) {
      alert("찾으시려는 값을 입력하세요");
    } else {
      setResult(array.indexOf(query));
      setQuery("");
    }
  };

  const findIncludes = () => {
    if (query.length === 0) {
      alert("찾으시려는 값을 입력하세요");
    } else {
      setResult(String(array.includes(query)));
      setQuery("");
    }
  };

  const doFind = () => {
    if (query.length === 0) {
      alert("찾으시려는 값을 입력하세요");
    } else {
      setResult(array.find((el) => el === query));
      setQuery("");
    }
  };

  const doSome = () => {
    if (query.length === 0) {
      alert("찾으시려는 값을 입력하세요");
    } else {
      setResult(String(array.some((el) => el !== query))); // 요소 중 하나라도 조건을 만족하면 true
      setQuery("");
    }
  };

  const doEvery = () => {
    if (query.length === 0) {
      alert("찾으시려는 값을 입력하세요");
    } else {
      setResult(String(array.every((el) => el.length > 3))); // 요소들이 조건을 모두 만족하면 true 하나라도 만족하지 않으면 false
      setQuery("");
    }
  };

  const doSort = () => {
    setResult([...array].sort().join(", "));
    setQuery("");
  };

  const doJoin = () => {
    setResult(array.join(" | ")); // 모든 요소가 구분자(join의 첫 인자)로 구별되어 문자열로 반환
    setQuery("");
  };

  return (
    <div className="App">
      <h1>Standard반 배열 API test</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="값을 입력하세요"
      />

      <div className="button_box" style={buttonBoxStyle}>
        <button onClick={doForEach}>forEach</button>
        <button onClick={doFilter}>filter</button>
        <button onClick={doMap}>map</button>
        <button onClick={doReduce}>reduce</button>
        <button onClick={doPush}>push</button>
        <button onClick={doPop}>pop</button>
        <button onClick={doSlice}>slice</button>
        <button onClick={doSplice}>splice</button>
        <button onClick={findIndexOf}>indexOf</button>
        <button onClick={findIncludes}>includes</button>
        <button onClick={doFind}>find</button>
        <button onClick={doSome}>some</button>
        <button onClick={doEvery}>every</button>
        <button onClick={doSort}>sort</button>
        <button onClick={doJoin}>join</button>
      </div>

      <div className="original" style={boxStyle}>
        <h2 style={{ display: "inline" }}>원본 배열: </h2>
        <span style={spanStyle}>{array.join(", ")}</span>
      </div>
      <div className="original" style={boxStyle}>
        <h2 style={{ display: "inline" }}>result: </h2>
        <span style={spanStyle}>{result}</span>
      </div>
    </div>
  );
}

export default App;
