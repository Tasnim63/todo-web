import "./App.css";

function App() {
  return (
    <div className=" d-flex justify-content-center align-content-center mt-5">
      <div class="card-area shadow-lg">
        <div>
          <h1>Increaments and Decrement</h1>
        </div>
     <div className=" d-flex justify-content-center align-content-center mt-5">
  <button className=" button p-2 me-3 fs-5">  ➕ </button>
      <input className=" count" type="text" value="0" />
      <button  className="button p-2 ms-3 fs-5">➖ </button>
    
     </div>
      </div>
    </div>
  );
}

export default App;
