import { forwardRef } from 'react';
import MaterialTable from 'material-table';

// material ui icons
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


function MaterialTableExample() {

  // must have or icons won't show up in table and it will look terrible
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

// none of these width properties are working fyi
  const columns = [
    { field: 'program', title: 'Program', filtering: false },
    {
      field: 'city', title: 'City', cellStyle: {
        width: 200,
        maxWidth: 200
      },
      headerStyle: {
        width: 200,
        maxWidth: 200
      }
    },
    { field: 'zip', title: 'Zip', width: 110 },
    { field: 'parentProgram', title: 'Parent Program', width: '50%' },
    { field: 'familyRecoveryHousing', title: 'Family Recovery Housing', width: 110 },
    { field: 'familyTreatmentProgramming', title: 'Family Treatment Programming', width: 110 },
    { field: 'men', title: 'Men', width: 110 },
    { field: 'women', title: 'Women', width: 110 },

    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'Istanbul', 63: 'Sanliurfa' },
    },
  ];

  const data = [
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betul', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    { program: 'A Way Out Recovery', city: 'Shakopee', zip: 55379 - 1749, parentProgram: 'A Way Out Recovery', men: 'men', women: 'women' },
    { id: 2, program: 'Abria Recovery', city: 'Burnsville', zip: 55337 - 2377, parentProgram: 'Abria Recovery', men: 'men', women: 'women' },
    { id: 3, program: 'ANEW', city: 'Saint Paul', zip: 55106 - 6140, parentProgram: 'Spence Specialties LLC Anew', familyRecoveryHousing: 'Family Recovery Housing', women: 'women' },
    { id: 4, program: 'Anthony Louis Center', city: 'Burnsville', zip: 55376, parentProgram: 'On-belay of Minnesota Inc dba Anthony', familyTreatmentProgramming: 'Family Treatment Programming', men: 'men', women: 'women' },
  ];

  const options = {
    search: true,
    paging: false,
    exportButton: true,
    filtering: true
    // tableLayout: 'fixed',
  };

  return (
    <>
      <div>
        {/* <div style={{ maxWidth: '100%' }}> */}
        <MaterialTable
          title="Providers"
          columns={columns}
          data={data}
          options={options}
          icons={tableIcons}
        />
      </div>
    </>
  )
}

export default MaterialTableExample;



// function BasicSearch() {
//   return (
//     <MaterialTable
//       title="Basic Search Preview"
//       columns={[
//         { title: 'Name', field: 'name' },
//         { title: 'Surname', field: 'surname' },
//         { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//         {
//           title: 'Birth Place',
//           field: 'birthCity',
//           lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//         },
//       ]}
//       data={[
//         { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//         { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//       ]}        
//       options={{
//         search: true
//       }}
//     />
//   )
// }
