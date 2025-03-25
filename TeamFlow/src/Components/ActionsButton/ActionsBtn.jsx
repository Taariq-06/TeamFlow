import { Menu, Button, Portal, Box } from "@chakra-ui/react";

const ActionsBtn = () => {
  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger>
          <Button
            variant="outline"
            size={{ base: "xs", md: "xs" }} 
          >
            Actions
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minWidth="120px"> {/* Consistent menu width */}
              <Menu.Item value="rename">Edit</Menu.Item>
              <Menu.Item value="export">Export</Menu.Item>
              <Menu.Item
                value="delete"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                Delete...
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default ActionsBtn;