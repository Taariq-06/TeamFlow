import { Box, InputGroup, Icon, Input } from "@chakra-ui/react"
import { Search } from "lucide-react"
const Filters = () => {
  return (
    <Box>
        <InputGroup startElement={<Search />} size="sm" maxW="12rem">
            <Input
                type="text"
                variant="filled"
                placeholder="Search"
                borderRadius={5}
            />
        </InputGroup>
    </Box>
  )
}

export default Filters