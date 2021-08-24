import "../../styles/Backdrop.css";

const Backdrop = (props) => {
  return (
    props.toggle && 
    <div className="backdrop" onClick={props.click}>
    </div>
  );
};

export default Backdrop;