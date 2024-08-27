import { useState } from "react"

import "./App.css"
 
const App =()=>{
const[salary,setSalary] = useState(null)
 const UserSalary =(event)=>{
  setSalary(event.target.value,salary)
 }
 const [sideIn,setSidein]=useState(null)
 const userIncome =(event)=>{
  setSidein(event.target.value,sideIn)
 }
 const [totalsal,setTotalsal] = useState(null)

 const total =()=>{
  setTotalsal(parseInt(salary)+parseInt(sideIn)) 

 }
 const [itemspr,setitemspr]=useState(null)
 const itemsPrice =(event)=>{
  setitemspr(event.target.value,itemspr)
 }
 const [item_2,setItem_2] = useState (null)
 const item_2_price =(event)=>{
  setItem_2(event.target.value)

 }
 const [item_3,setItem_3] = useState (null)
 const item_3_price =(event)=>{
  setItem_3(event.target.value)

 }
 const [item_4,setItem_4] = useState (null)
 const item_4_price =(event)=>{
  setItem_4(event.target.value)

 }
 const [item_5,setItem_5] = useState (null)
 const item_5_price =(event)=>{
  setItem_5(event.target.value)

 }


 const [total_Expen,setTotalExp] =useState(null)
 const  totalExp =()=>{
  setTotalExp(parseInt(itemspr)+parseInt(item_2)+parseInt(item_3)+parseInt(item_4)+parseInt(item_5)
    
  )

 }
 const [balance_t, setBalance]= useState(null)
 const balance =()=>{
  setBalance( parseInt(totalsal) -parseInt(total_Expen))
      
 }
 
return(
  <div className="main_body">
    <div className="heading_text">
    <span className="budget_text">Budget Tracker</span>
    </div>
    <div className="Salary_inputs">
      <div className="salarys_two_column">
      <input type="text" placeholder="Enter Your Salary"value={salary}onChange={UserSalary} />
      <input type="text" placeholder="Side income" value={sideIn} onChange={userIncome} />
    </div>
    <div className="total_text_and_box">
    <div className="box_total">
      <button onClick={total}>Total Salary</button>
    </div>
    <div className="total_sal">
    <h1 className="total_salary_text">{totalsal}</h1>
    </div>
    </div>
    </div>
    <div className="expenses">
      <div className="exp_text_div">
      <h1 className="exp_text">Expenses</h1>
      </div>
      <div className="item_and_price">
      <div className="Items">
        <div className="items_divs">
        <h1>Phone Bill</h1>
        </div>
        <div className="items_divs">
        <h1>Phone Bill</h1>
        </div>
        <div className="items_divs">
        <h1 >Phone Bill</h1>
        </div>
        <div className="items_divs">
        <h1>Phone Bill</h1>
        </div>
        <div className="items_divs">
        <h1>Phone Bill</h1>
        </div>
      
      </div>
      <div className="price_inputs">
        <input type="text"  className="price_rs" value={itemspr} onChange={itemsPrice} />
        <input type="text"  className="price_rs" value={item_2} onChange={item_2_price}/>
        <input type="text"  className="price_rs" value={item_3} onChange={item_3_price}/>
        <input type="text"  className="price_rs" value={item_4} onChange={item_4_price}/>
        <input type="text" className="price_rs" value={item_5} onChange={item_5_price}/>
        

      </div>
    
      </div>
      <div className="expenses_btn_and_res">
      <button onClick={totalExp}>Expenses</button>
     
      </div>
      <div className="exp_text_last">
      <button className="balance_btn" onClick={balance}>Balance</button>
      <h1 className="total_salary_text">{total_Expen}</h1>
      
      </div>
    </div>
    <h1>{balance_t}</h1>
  </div>
)

}


export default App