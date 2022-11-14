import "./Nav.css";

const Nav = (props) => {
  const classes = `nav ${props.className ? props.className : ""}`;
  return <nav className={classes}>{props.children}</nav>;
};

export default Nav;
