import { useRef, useState } from 'react';
import './App.css';
import Edit from './Edit.js';
import TalkList from './TalkList.js';

function App() {

  const [data, setData] = useState([])

  const dataId = useRef(0)

  const upload = (writer, contents, emoticon) => {
    const created_date = new Date().getTime()
    const newList = {
      writer,
      contents,
      emoticon,
      created_date,
      id: dataId.current
    }
    dataId.current += 1
    setData([newList, ...data])
  }

  const del = (targetId) => {
    const newTalkList = data.filter((it) => it.id !== targetId)
    setData(newTalkList)
  }

  const editing = (targetId, newContent) => {
    setData(
      data.map((it) => it.id === targetId ? {...it, contents:newContent} : it)
    )
  }

  return (
    <div className="App">
      <Edit upload={upload}/>
      <TalkList editing={editing} del={del} list={data}/>
    </div>
  );
}

export default App;
