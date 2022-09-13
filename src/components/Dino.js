import { AgGridReact } from "ag-grid-react";
import  "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Dino = (props) => {
    const cols =[
        {headerName:"name", field: "name"},
        {headerName:"description", field: "description" },
        {headerName:"petType", field: "petType"},
   
      ]

  return (
    <div className="ag-theme-alpine"
    style={{height:props.height, width:props.width}}>
        <AgGridReact columnDefs={cols} rowData={props.rows}/>
    </div>
  )
}
export default Dino;
