import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon  from "../deleteIcon.png";
function TableData({change,setChange}:{change:boolean,setChange:any}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/brand_sales_daily"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [change]);
  let tmp = data;
  const deleteSalesData = (id:any) => {
    try{
        axios
      .delete(`http://localhost:4000/api/v1/brand_sales_daily/${id}`)
      .then((res) => console.log("deleted Successfully data", res))
      .catch((error) => {
        console.log(error);
      });
    }
    catch(error){
        console.error(error);
    }
    change ? setChange(false) : setChange(true);
  }
  return (
    <>
      {tmp.length
        ? tmp.map((items, index) => {
            return (
              <tbody key={index}>
                <tr className="salesData">
                  <td>
                    <div>{items["brand"]}</div>
                  </td>
                  <td>
                    <div>{items["transactionType"]}</div>
                  </td>
                  <td>
                    <div>{items["totalOrders"]}</div>
                  </td>
                  <td>
                    <div>{items["totalOrderValue"]}</div>
                  </td>
                  <td>
                    <div>{items["grossMarginPercentage"]}</div>
                  </td>
                  <td>
                    <div onClick={() => deleteSalesData(items['_id'])}><img src={DeleteIcon} alt="" className="deleteIcon"/></div>
                  </td>
                </tr>
              </tbody>
            );
          })
        : null}
    </>
  );
}

export default TableData;
