import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import Filters from './Components/Filters/Filters';
import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import { system } from './theme/theme'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return ( 
    <ChakraProvider value={system}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/employees" element={<EmployeeTable />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;