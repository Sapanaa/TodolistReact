import { useEffect, useState } from "react";

import "./App.css";


function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderTask = <h4>No task Available</h4>;

if(mainTask.length>0){ 

   renderTask = mainTask.map((t, i) => {
    return(
    <li key={i}>
      <div className="flex justify-between mb-5 text-black w-9/12">
        <h5 className="text-lg">{t.title}</h5>
        <h6 className="text-xl">{t.desc}</h6>
      <button className="bg-red-700 px-3 py-2 rounded-md font-serif font-bold " onClick={()=>deleteHandler(i)}>
        Delete</button>

      </div>
      </li>)
  });
}



  return (
    <>
      <h1 className="bg-black text-white p-5 font-bold text-center">
        Sapana's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 m-3 px-2 py-2"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 m-5 px-2 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white p-2 rounded">Add Task</button>
      </form>
      <hr />
      <div className="bg-slate-400 p-10">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
