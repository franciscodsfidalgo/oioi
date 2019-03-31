import ButtonGroup from "./buttonGroup";
import "../fontawesome";

const TextBox = ({ p }) => {
  
  const text=decodeURIComponent(p.text);
  var temp;
  if (p.timestamp>0){
    temp=p.timestamp;
  }
  else temp=p.timestamp.slice(0, 10)

  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="row m-0">{decodeURIComponent(text)}</p>
        <ButtonGroup p={p} />
      </div>

      <div className="flex w-100 mt-2">
        <small className="ml-2">{temp}</small>
        <a href="/" className="ml-5">
          reply
        </a>
        <a href="/" className="ml-5">
          report
        </a>
      </div>
    </div>
  );
};

export default TextBox;
