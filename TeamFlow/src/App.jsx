import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import { system } from './theme/theme'
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider value={system}>
      <EmployeeTable/>
    </ChakraProvider>

  )
}

export default App;