import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import styles from "./styles";

const customConfig = defineConfig({
  globalCss: styles,
  theme: {
    tokens: {
      sizes: {
        sm: {value: "20px"}
      }
    }
  }
})

export const system = createSystem(defaultConfig, customConfig)