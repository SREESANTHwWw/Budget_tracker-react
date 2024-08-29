import { useState } from "react";

import "./App.css";

const App = () => {
  const [salary, setSalary] = useState(null);
  const UserSalary = (event) => {
    setSalary(event.target.value, salary);
  };

  const [data, setData] = useState([]);
  // console.log(data);

  const addItems = () => {
    setData([...data, { name: itemspr, price: priceTag }]);
  };
  const [itemspr, setitemspr] = useState(null);
  const [priceTag, setPricetag] = useState(null);

  const [sideIn, setSidein] = useState(null);
  const userIncome = (event) => {
    setSidein(event.target.value, sideIn);
  };
  const [totalsal, setTotalsal] = useState(null);

  const total = () => {
    setTotalsal(parseInt(salary) + parseInt(sideIn) + "₹");
  };

  const [total_Expen, setTotalExp] = useState(0);
  const totalExp = () => {
    console.log(data);

 const total = data.reduce((prevalue, curvalue) => {
      return parseInt(prevalue) + parseInt(curvalue.price);
    }, 0);

    setTotalExp(total)
  };
  const [balance_t, setBalance] = useState(null);
  const balance = () => {
    setBalance(parseInt(totalsal) - parseInt(total_Expen));
  };

  return (
    <div className="main_body">
      <div className="heading_text">
        <span className="budget_text">Budget Tracker</span>
      </div>

      <div className="main_body_all">
        <div className="Salary_inputs">
          <div className="salarys_two_column">
            <input
              type="text"
              placeholder="Enter Your Salary"
              value={salary}
              onChange={UserSalary}
            />
            <input
              type="text"
              placeholder="Side income"
              value={sideIn}
              onChange={userIncome}
            />
          </div>
          <div className="total_text_and_box">
            <div className="box_total">
              <button onClick={total}>Total Salary</button>
            </div>
          </div>
          <div className="total_sal">
            <h1 className="total_salary_text">{totalsal}</h1>
          </div>
          <div className="balance_div">
            <span className="plain_balance_text"> Balance</span>
            <h1 className="balance_display">
              <u>{balance_t}</u>{" "}
            </h1>
          </div>
        </div>
        <div className="expenses">
          <div className="exp_text_div">
            <h1 className="exp_text">Expenses</h1>
          </div>
          <div className="item_and_price">
            <div className="price_inputs">
              <div className="Items">
                <h1>Expenses Item</h1>
              </div>
              <input
                type="text"
                className="price_rs"
                value={itemspr}
                onChange={(e) => setitemspr(e.target.value)}
              />
              <div className="Items">
                <h1>Price</h1>
              </div>
              <input
                className="price_rs"
                type="text"
                value={priceTag}
                onChange={(e) => setPricetag(e.target.value)}
              />
              <div className="add_items_div">
                <button className="add_btn" onClick={addItems}>
                  Add items
                </button>
              </div>
            </div>
            <div className="item_shows">
              <div className="item_names">
                {data.map((eve) => (
                  <h1>{eve.name}</h1>
                ))}
              </div>
              <div className="price_number">
                {data.map((eve) => (
                  <h1 className="item_price_inputs_">{eve.price}</h1>
                ))}
              </div>
            </div>
          </div>

          <div className="expenses_btn_and_res">
            <button className="add_btn" onClick={totalExp}>
              Expenses
            </button>
          </div>
          <div className="exp_text_last">
            <button className="balance_btn" onClick={balance}>
              Balance
            </button>
            <h1 className="total_salary_text">{total_Expen}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
