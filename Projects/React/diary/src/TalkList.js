import TalkContents from "./TalkContents.js"

const TalkList = ({editing, list, del}) => {
    return (
    <div className="TalkList">
        <h2>일기장 리스트</h2>
        <h4>{list.length}개의 일기가 있습니다.</h4>
        <div>
            {list.map((it) => (
                <TalkContents key={it.id} {...it} del={del} editing={editing}/>
            ))}
        </div>
    </div>
    )
}

// TalkList.defaultProps = {
//     list: [],
// }

export default TalkList