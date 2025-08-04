
import Headerpackedgeleftside from "../headerpackedgeleftside/headerpackedgeleftside";
import Headerpackedgerightside from "../headerpackedgerightside/headerpackedgerightside";
export default function Headerpackedge() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-0 py-6 gap-4">
        <Headerpackedgeleftside />

        <Headerpackedgerightside />
      </div>
    </>
  );
}
