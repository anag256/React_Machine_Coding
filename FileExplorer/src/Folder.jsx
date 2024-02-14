import React, { useCallback, useState } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Folder = ({ explorer, handleInsertNode, handleEditNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const onclick = (e) => {
    e.stopPropagation();
    setExpand(!expand);
  };
  // if(!explorer.isFolder){
  //   return <div className="file">
  //    <h3> 📄{explorer.name}</h3>
  //   </div>
  // }
  const onBlur = () => {
    setExpand(false);
    setShowInput({
      visible: false,
      isFolder: false,
    });
  };
  const onAddFolderClick = (e) => {
    e.stopPropagation();
    console.log("foler clicked");
    setShowInput({
      visible: true,
      isFolder: true,
    });
    if (!expand) {
      setExpand(!expand);
    }
  };
  const onAddFileClick = (e) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: false,
    });
    if (!expand) {
      setExpand(!expand);
    }
  };

  const handleNewAddition = (e, isFolder, folderId) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(folderId, e.target.value, isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const handleNewEdit = (e, folderId) => {
    if (e.keyCode === 13 && e.target.value) {
      handleEditNode(folderId, e.target.value);
      setIsEditing(false);
    }
  };
  return (
    <div>
      {explorer.isFolder ? (
        <>
          <div className="explorer" key={explorer.id} onClick={onclick}>
            {isEditing ? (
              <input
                type="text"
                autoFocus
                onBlur={() => setIsEditing(false)}
                onKeyDown={(e) =>
                  handleNewEdit(e, explorer.id)
                }
              />
            ) : (
              <h3> 📁 {explorer.name}</h3>
            )}

            <div className="btn-block">
              <button onClick={onAddFolderClick}>
                <AiFillFolderAdd size={23} />
              </button>
              <button onClick={onAddFileClick}>
                <AiFillFileAdd size={23} />
              </button>
              <button onClick={() => setIsEditing(true)}>
                <CiEdit size={23} />
              </button>
            </div>
          </div>
          {showInput.visible && (
            <div className="explorer inputDIv">
              {
                <>
                  <span>{showInput.isFolder ? "📁" : "📄"}</span>
                  <input
                    type="text"
                    autoFocus
                    onBlur={onBlur}
                    onKeyDown={(e) =>
                      handleNewAddition(e, showInput.isFolder, explorer.id)
                    }
                  />
                </>
              }
            </div>
          )}
          <div
            style={{ display: expand ? "block" : "none", marginLeft: "35px" }}
          >
            {explorer.items.map((item) => (
              <Folder
                explorer={item}
                key={item.id}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="explorer" key={explorer.id}>
          <div className="file">
            <h3> 📄{explorer.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Folder;
