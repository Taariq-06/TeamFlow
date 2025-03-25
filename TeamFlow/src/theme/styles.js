import { GiApc } from "react-icons/gi";

// styles.js
const styles = {
  "html, body": {
    backgroundColor: "gray.900",
    color: "whiteAlpha.800",
    boxSizing: "border-box",
  },
  ".table": {
    width: "fit-content", 
    minWidth: "300px",
    display: "block",
    whiteSpace: "nowrap",
  },
  ".tr": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "fit-content",
      borderBottom: "1px solid #424242",
      paddingBlock: "1.5rem",
    md: {
      minWidth: "600px",

    }

  },
  ".th": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0.25rem 0.13rem",
    fontSize: "8px",
    fontWeight: "bold",
    color: "gray.400",
    textTransform: "uppercase",
    sm: {
      padding: "0.4rem",
      fontSize: "10px"
    },
    md:  {
      padding: "0.5rem",
      fontSize: "16px",
    }
  },
  md: {
      ".resizer": {
    position: "absolute",
    opacity: 0,
    top: 0,
    right: 0,
    h: "100%",
    w: "5px",
    bg: "#27bbff",
    cursor: "col-resize",
    userSelect: "none",
    touchAction: "none",
    borderRadius: "6px",
    transition: "opacity 0.5s ease-in-out 0.1s"
  },
  ".resizer.isResizing": {
    bg: "#2eff31",
    opacity: 1,
  },
  "*:hover > .resizer": {
    opacity: 1,
  },
  },
  ".checkBox": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.25rem 0.5rem",
    minWidth: "15px",
  },
  ".td": {
    padding: "0.2rem 0.3rem",
    fontSize: "10px",
    sm: {
      fontSize: "14px"
    },
    md: {
      padding: "0.3rem 0.5rem",
      fontSize: "1rem"
    }
  }
}

  export default styles;