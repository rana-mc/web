import { useParams, useSubmit } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import { useEffect } from "react";
import { ranaSocket, ServerActions } from "~/vendors/ranaSocketIo";
import Loader from "rsuite/Loader";

export async function action() {
  return redirect("/");
}

const Done = () => {
  const submit = useSubmit();
  const params = useParams();

  useEffect(() => {
    ranaSocket.emit(ServerActions.FlushServers);
    submit(null, { action: `/servers/${params?.id}` });
  }, []);

  return <Loader />;
};

export default Done;
