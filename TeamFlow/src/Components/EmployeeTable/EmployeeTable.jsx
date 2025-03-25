import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { DATA } from '../../data';
import ActionsBtn from '../ActionsButton/actionsBtn';
import Filters from '../Filters/Filters';
import { Box, Checkbox, Text } from '@chakra-ui/react';

const columns = [
    {
        accessorKey: 'id',
        header: 'Employee id',
        cell: (props) => <Text>{props.getValue()}</Text>

    },
    {
        accessorKey: 'firstName',
        header: 'Name',
        cell: (props) => <Text>{props.getValue()}</Text>
    },
    {
        accessorKey: 'lastName',
        header: 'Last name',
        cell: (props) => <Text>{props.getValue()}</Text>
    },
    {
        accessorKey: 'role',
        header: 'Role',
        cell: (props) => <Text>{props.getValue()}</Text>
    },
    {
        accessorKey: 'department',
        header: 'Department',
        cell: (props) => <Text>{props.getValue()}</Text>
    },
    {
        id: 'actions',
        header: 'Actions', 
        cell: ActionsBtn,
      }
]

const EmployeeTable = () => {
    const [data, setData] = useState(DATA);
    const [columnFilters, setColumnFilters] = useState([]);
    const table = useReactTable(
        {
            data,
            columns,
            state: {
                columnFilters,
            },
            getCoreRowModel: getCoreRowModel(),
            columnResizeMode: "onChange",
        }
    );

  return (
    <>
        <Filters />
        <Box  display="flex" md={{justifyContent: "center"}}  p={{base: "0.5rem", sm:"1rem", md:"2rem"}} overflowX="auto">    
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
    </>
  );
}

export default EmployeeTable;