import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Zingi Zuu</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">zingi11@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1 3649431942</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">63/9E-65 , Graden York</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Transactions (Last 6 Months) " />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single