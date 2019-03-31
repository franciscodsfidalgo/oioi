import TextBox from "./textBox"; 

const ImageBox = ({ p }) => {
  
  const url=p.url

  let photo = true;
  
  if (url === "0" || url === ""){
    photo = false
  }
  
  return (
    <div className="card mt-3 customBC">
      <div className="card-body m-2">
        { photo ? (
          <div>
            <img
              className="card border-warning mb-3"
              src={url}
              height="auto"
              width="150"
              alt=""
            />
          </div>
        ) : null}
        <TextBox p={p} />
      </div>
      <style jsx>{`
        .customBC {
          border-color: #fff;
          border-radius: 0px;
        }
      `}</style>
    </div>
  );
};

export default ImageBox;
