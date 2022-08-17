import { useRef, useState } from "react"

const Edit = ({upload}) => {
    const focusWriter = useRef()
    const focusContent = useRef()

    const [writer,setWriter] = useState("")
    const [contents, setContents] = useState("")
    const [emoticon, setEmoticon] = useState(1)

    const Submit = () => {
        if(writer.length < 2) {
            focusWriter.current.focus()
            return
        }

        if(contents.length < 5) {
            focusContent.current.focus()
            return
        }
        
        upload(writer, contents, emoticon)
        alert("업로드 완료")
        setWriter("")
        setContents("")
        setEmoticon(1)
    }

    return (
    <div className="Edit">
        <h2>오늘의 일기</h2>
        <div>
            <input
                ref={focusWriter}
                value={writer}
                onChange={(e) => {
                    setWriter(e.target.value)
            }}
            />
        </div>
        <div>
            <textarea
                ref={focusContent}
                value={contents}
                onChange={(e) => {
                    setContents(e.target.value)
                }}
            />
        </div>
        <div>
            <select
                name="emoticon"
                value={emoticon}
                onChange={(e) => {
                    setEmoticon(e.target.value)
                }}
                >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </select>
        </div>
        <div>
            <button onClick={Submit}>업로드</button>
        </div>
    </div>
    )
}

export default Edit