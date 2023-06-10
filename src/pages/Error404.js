import CenteredContent from "../layouts/CenteredContent";
import Error from "../components/Error";

function Error404() {
  return (
    <CenteredContent>
      <div className="p-4">
        <Error message={"404. Not Found"} />
      </div>
    </CenteredContent>
  );
}

export default Error404;
