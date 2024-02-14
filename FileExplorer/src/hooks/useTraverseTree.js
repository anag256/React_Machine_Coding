const useTraverseTree=()=>{

    function insertNode(tree,folderId,item,isFolder){
        //check if it is root
        if(tree.id===folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date(),
                name:item,
                isFolder,
                items:[]
            })
        }
        let latest_node=[];

       latest_node= tree.items.map(treeItem=>insertNode(treeItem,folderId,item,isFolder))
        return {...tree,items:latest_node};
    }


    function editNode(tree,explorerId,item){
        //check if it is root
        if(tree.id===explorerId && tree.isFolder){

        //    updatedTree= tree.items.map(treeItem=>{
        //         if(treeItem.id===explorerId) treeItem.name=item;
        //         return treeItem;
        //     });
            tree.name=item;
        }
        let latest_node=[];

       latest_node= tree.items.map(treeItem=>editNode(treeItem,explorerId,item))
        return {...tree,items:latest_node};
    }

    return {insertNode,editNode}
}
export default useTraverseTree;