import DropDownMenu from "./DropDownMenu";

const Header = () => {
  return ( 
    <div className="header-container">
      <div className="title-row">
        <h1>SkySecrets</h1>
        <DropDownMenu />
      </div> 
    </div>
   );
}
 
export default Header;