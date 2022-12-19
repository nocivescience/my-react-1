export function Card(props) {
  return (
    <div className="card d-flex flex-row justify-content-around my-3">
                <div>{props.title}</div>
                <div>{props.name}</div>
                <div>{props.work}</div>
            </div>
  );
}
