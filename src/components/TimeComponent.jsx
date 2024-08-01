let TimeComponent = () => {
  let today = new Date();
  return (
    <center>
      <h3 className="lead">
        This is the current date {today.toLocaleDateString()}
        {" - "}
        {today.toLocaleTimeString()}
      </h3>
    </center>
  );
};

export default TimeComponent;
