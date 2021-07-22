
import { DataGrid } from '@material-ui/data-grid';

function DataGrid() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'program', headerName: 'Program', width: 120},
        { field: 'city', headerName: 'City', width: 110 },
        { field: 'zip', headerName: 'Zip', width: 110 },
        { field: 'zip', headerName: 'Zip', width: 110 },
        { field: 'zip', headerName: 'Zip', width: 110 }
    ]

    const rows = [


    ]


    return (
        <>
            <h2>Data Grid</h2>
            <div style={{ width: '100%' }}>
                <DataGrid rows={rows} columns={columns} autoHeight='true' hideFooterPagination='false' />
            </div>
        </>

    )
}

export default DataGrid;