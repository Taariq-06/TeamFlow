import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import styles from "./styles";

const customConfig = defineConfig({
  globalCss: styles
})

export const system = createSystem(defaultConfig, customConfig)