function NavLink( props ) {
  
  const myStyles = { color: props.colorStyle }
   
  return <li style={myStyles}>
    {props.title}
    </li>;
}

export default NavLink;
