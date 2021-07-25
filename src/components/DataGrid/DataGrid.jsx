
import { DataGrid } from '@material-ui/data-grid';

function DataGridExample() {

    const columns = [
        // { field: 'id', headerName: 'ID', width: 50 },
        { field: 'program', headerName: 'Program', width: 150},
        { field: 'city', headerName: 'City', width: 110 },
        { field: 'zip', headerName: 'Zip', width: 100 },
        { field: 'parentProgram', headerName: 'Parent Program', width: 210 },
        { field: 'familyRecoveryHousing', headerName: 'Family Recovery Housing', width: 210 },
        { field: 'men', headerName: 'Men', width: 110 },
        { field: 'Women', headerName: 'Women', width: 150 },
    ]

    const rows = [
        { id: 1, program: 'A Way Out Recovery', city: 'Shakopee', zip: 55379 - 1749, parentProgram: 'A Way Out Recovery', familyRecoveryHousing: false, men: true, women: true},
        { id: 2, program: 'Abria Recovery', city: 'Burnsville', zip: 55337-2377, parentProgram: 'Abria Recovery', familyRecoveryHousing: false, men: true, women: true},
        { id: 3, program: 'ANEW', city: 'Saint Paul', zip: 55106-6140, parentProgram: 'Spence Specialties LLC Anew', familyRecoveryHousing: true, men: false, women: true},
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

export default DataGridExample;