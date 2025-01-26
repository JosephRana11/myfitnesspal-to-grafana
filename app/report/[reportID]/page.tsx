// "use client"

'use client'
import { environment } from "../../api/environment";
import { useParams } from "next/navigation";


export default  function Page() {

  const param = useParams()

  return (
      <iframe
        src={`${environment.grafana_url}&var-reportId=${param["reportID"]}&kiosk=1`}
        className="h-screen w-screen"
      />
  );
}
