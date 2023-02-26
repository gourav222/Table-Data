import { Button, Input, Select } from "@chakra-ui/react";
import "../App.css";
import { useState } from "react";
import  {ChevronDownIcon}   from "@chakra-ui/icons";

import axios from "axios";
function AddBrandSales({change,setChange}:{change:boolean,setChange:any}) {
  const [brand, setBrand] = useState("");
  const [transaction, setTransaction] = useState("");
  const [totalOrders, setTotalOrders] = useState("");
  const [totalOrderValue, setTotalOrderValue] = useState("");
  const [grossMarginPercentage, setGrossMarginPercentage] = useState("");
  const addSales = () => {
    const salesData = {
      brand: brand,
      transactionType: transaction,
      totalOrders: totalOrders,
      totalOrderValue: totalOrderValue,
      grossMarginPercentage: grossMarginPercentage,
      __v: 0,
    };
    axios
      .post("http://localhost:4000/api/v1/brand_sales_daily", salesData)
      .then((res) => console.log("Successfully add the data", res))
      .catch((error) => {
        console.log(error);
      });
    setBrand("");
    setTransaction("");
    setTotalOrders("");
    setTotalOrderValue("");
    setGrossMarginPercentage("");
    change ? setChange(false) : setChange(true);
  };
  return (
    <>
      <tr className="tableRow">
        <td>
          <div>
            <Input
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            ></Input>
          </div>
        </td>
        <td>
          <div>
            <Select
              icon={<ChevronDownIcon />}
              placeholder="Transaction Type"
              value={transaction}
              onChange={(e) => {
                setTransaction(e.target.value);
              }}
            >
              <option value="Trading">Trading</option>
              <option value="Facilation">Facilation</option>
            </Select>
          </div>
        </td>
        <td>
          <div>
            <Input
              value={totalOrders}
              onChange={(e) => {
                setTotalOrders(e.target.value);
              }}
            ></Input>
          </div>
        </td>
        <td>
          <div>
            <Input
              value={totalOrderValue}
              onChange={(e) => {
                setTotalOrderValue(e.target.value);
              }}
            ></Input>
          </div>
        </td>
        <td>
          <div>
            <Input
              value={grossMarginPercentage}
              onChange={(e) => {
                setGrossMarginPercentage(e.target.value);
              }}
            ></Input>
          </div>
        </td>
      </tr>
      <Button
        mt={8}
        mb={4}
        ml="1420px"
        position="absolute"
        alignItems="center"
        bg={"primary"}
        color="white"
        type="submit"
        _hover={{
          background: "primary",
        }}
        onClick={() => {
          addSales();
        }}
      >
        Submit
      </Button>
    </>
  );
}

export default AddBrandSales;
