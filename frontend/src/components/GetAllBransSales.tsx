import "../App.css";
import { Container } from "./Header";
import TableHeader from "./TableHeader";
function GetAllBransSales() {
  return (
    <>
      <Container caption={true} />
      <TableHeader mange={false} addSales={false}/>
    </>
  );
}

export default GetAllBransSales;
