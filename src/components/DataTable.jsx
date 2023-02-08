import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from '@material-ui/core';
import FetchData from './FetchData';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  {
    field: 'html_url',
    headerName: 'GitHub_URL',
    width: 300,
    renderCell: (params) => (
      <Link href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </Link>
    )
  },
  {
    field: 'download_url',
    headerName: 'Download URL',
    width: 300,
    cellStyle: {
      margin: '30px'
    },
    renderCell: (params) => (
      <Link href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </Link>
    )
  },
];

const userTableStyles = {
  height: '500px',
};

const DataTable = () => {
  const [repo, error] = FetchData();

  if (!repo) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const data = repo.map(r => ({
    name: r.name,
    html_url: r.html_url,
    download_url: r.download_url,
  }));

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.name}
        rows={data}
        columns={columns}
        sx={userTableStyles}
        checkboxSelection
        pagination
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={10}
      />
    </div>
  )
}

export default DataTable;
