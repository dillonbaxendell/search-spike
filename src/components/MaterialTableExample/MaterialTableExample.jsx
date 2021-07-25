import { forwardRef } from 'react';
import MaterialTable from 'material-table';

// material ui
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


  const columns = [
    { field: 'program', title: 'Program', width: 120 },
    { field: 'city', title: 'City', width: 110 },
    { field: 'zip', title: 'Zip', width: 110 },
    { field: 'parentProgram', title: 'Parent Program', width: 110 },
    { field: 'familyRecoveryHousing', title: 'Family Recovery Housing', width: 110 },
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
    { program: 'A Way Out Recovery', city: 'Shakopee', zip: 55379 - 1749, parentProgram: 'A Way Out Recovery', familyRecoveryHousing: false, men: true, women: true}
  ];

  return (
    <>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          title="Basic Search Preview"
          columns={columns}
          data={data}
          options={{
            search: true
          }}
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
