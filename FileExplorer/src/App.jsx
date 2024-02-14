import { useState } from "react";
import "./App.css";
import Folder from "./Folder";
import { data } from "./data";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorer, setExplorer] = useState(data);
  const { insertNode, editNode, deleteNode } = useTraverseTree();

  function handleInsertNode(folderId, item, isFolder) {
    let tree = insertNode(explorer, folderId, item, isFolder);
    setExplorer(tree);
  }

  function handleEditNode(explorerId, item) {
    let tree = editNode(explorer, explorerId, item);
    setExplorer(tree);
  }
  return (
    <div className="container">
      <Folder
        explorer={explorer}
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
      />
    </div>
  );
}

export default App;
