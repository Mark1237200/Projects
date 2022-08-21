import { useRef, useState } from "react";

const TalkContents = ({
  editing,
  del,
  writer,
  contents,
  emoticon,
  id,
  created_date,
}) => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);
  const [localContent, setLocalContent] = useState(contents);
  const localContentInput = useRef();

  const quitEdit = () => {
    setEdit(false);
    setLocalContent(contents);
  };

  const editComplete = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    editing(id, localContent);
    toggleEdit();
  };

  return (
    <div className="TalkContents">
      <div className="info">
        <span>
          작성자 : {writer} | 감정점수 : {emoticon}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()} </span>
      </div>
      <div className="content">
        {edit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{contents}</>
        )}
      </div>
      {edit ? (
        <>
          <button onClick={quitEdit}>수정 취소</button>
          <button onClick={editComplete}>수정 완료</button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              if (window.confirm(`${id}번째 글을 삭제하시겠습니까?`)) {
                del(id);
              }
            }}
          >
            삭제
          </button>

          <button onClick={toggleEdit}>수정</button>
        </>
      )}
    </div>
  );
};

export default TalkContents;
