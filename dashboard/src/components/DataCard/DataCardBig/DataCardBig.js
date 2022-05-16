import productDummy from "../../../assets/product_dummy.svg";

export default function DataCardBig(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "25rem" }}
              src={props.image ? props.image : productDummy}
              alt="Categories"
            />
          </div>
          <p className="m-0 font-weight-bold" style={{ listStyle: "none" }}>
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
}
