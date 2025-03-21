import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { DATA } from '../../data';
import { Box } from '@chakra-ui/react';

const EmployeeTable = () => {
    const columns = [
        {
            accessorKey: 'firstName',
            header: 'Name',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'lastName',
            header: 'Last name',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'role',
            header: 'Role',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'department',
            header: 'Department',
            cell: (props) => <p>{props.getValue()}</p>
        },
    ]

    const [data, setData] = useState(DATA);
    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
        }
    );

  return (
    <Box className=''>
        <Box className='table' w={table.getTotalSize()}>
            {table.getHeaderGroups().map(headerGroup => <Box className='tr' key={headerGroup.id} > 
                {headerGroup.headers.map(
                    header => <Box className='th'  w={header.getSize()} key={header.id}> 
                        {header.column.columnDef.header}
                    </Box>
                )}
            </Box>
            )}
            {
                table.getRowModel().rows.map(row => <Box className='tr' key={row.id}>
                    {row.getVisibleCells().map(cell => <Box className='td'  w={cell.column.getSize()} key={cell.id}> 
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Box>
                )}
                </Box>
                )
            }
        </Box>
    </Box>
  );
}

export default EmployeeTable;    