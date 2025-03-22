// styles.js
const styles = {
  "html, body": {
    backgroundColor: "gray.900",
    color: "whiteAlpha.800",
    boxSizing: "border-box",
  },
  ".table-wrapper": {
    display: "flex",
    justifyContent: "center",
    paddingInline: "1rem",
    paddingBlock: "1rem",
    overflowX: "scroll",
    md: {
      paddingBlock: "2rem",
      paddingInline: "2rem",
    } 
  },
  ".table": {
    border: "1px solid #424242",
    minWidth: "20rem",
  },
  ".tr": {
    display: "flex",
  },
  ".th": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "inset 0 0 0 1px #424242",
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
    boxShadow: "inset 0 0 0 1px #424242",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.25rem 0.5rem",
    minWidth: "15px",
  },
  ".td": {
    boxShadow: "inset 0 0 0 1px #424242",
    padding: "0.2rem 0.3rem",
    fontSize: "8px",
    md: {
      padding: "0.3rem 0.5rem",
      fontSize: "1rem"
    }
  }
}

  export default styles;