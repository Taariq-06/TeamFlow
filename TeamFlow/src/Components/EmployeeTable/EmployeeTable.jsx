import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { DATA } from '../../data';
import { Box, Checkbox, Flex } from '@chakra-ui/react';

const EmployeeTable = () => {
    const columns = [
        {
            accessorKey: 'id',
            header: 'Employee id',
            cell: (props) => <p>{props.getValue()}</p>
        },
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
            columnResizeMode: "onChange",
        }
    );

  return (
    <Box className="table-wrapper">
        <Box className='table' w={table.getTotalSize()}>  
            {table.getHeaderGroups().map(headerGroup => <Box className='tr' key={headerGroup.id} > 
                <Checkbox.Root  className='checkBox' size={{base: "xs", md:"sm"}} aria-label='checkbox'>
                    <Checkbox.HiddenInput  />
                    <Checkbox.Control id='selectAll' border= "1px solid #FFF" />
                </Checkbox.Root>
            {headerGroup.headers.map(
            header => <Box className='th' scope="col" w={header.getSize()} key={header.id}> 
              {header.column.columnDef.header}
              <Box
                onMouseDown={header.getResizeHandler()}  
                onTouchStart={header.getResizeHandler()}
                className={
                    `resizer ${
                        header.column.getIsResizing() ? ' isResizing' : ''
                    }`}
                />
            </Box>
            )}
        </Box>
        )}
        {
            table.getRowModel().rows.map(row => (
                <Box className='tr' key={row.id}>
                    <Checkbox.Root  className='checkBox' size={{base: "xs", md:"sm"}} aria-label='checkbox'>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                    </Checkbox.Root>
                {
                row.getVisibleCells().map(cell => (
                  <Box className='td' w={cell.column.getSize()} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())} 
                  </Box>
                 ))
                }
                </Box>
            ))} 
        </Box> 
    </Box>

  );
}

export default EmployeeTable;    