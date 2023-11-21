import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { dataFetch } from "../Redux/data/action";
import Chart from "chart.js/auto";

const DashBoard = () => {
  const adminData = useSelector((store) => store.adminReducer.admin);
  const dispatch = useDispatch();
  const chartRef = useRef();

  useEffect(() => {
    dispatch(dataFetch());
  }, [dispatch]);

  useEffect(() => {
    if (adminData && adminData.data && chartRef.current) {
      const data = adminData.data.amount;
      const categories = Object.keys(data);
      const amounts = Object.values(data);

      const chartData = {
        labels: categories,
        datasets: [
          {
            label: "Amount",
            data: amounts,
            backgroundColor: "#F0C3F1",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      };

      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      const myChart = new Chart(chartRef.current, {
        type: "bar",
        data: chartData,
        options: chartOptions,
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [adminData]);

  console.log(adminData);
  return (
    <DASHBOARD>
      {adminData && adminData.data && (
        <>
          <StyledHeading>
            {adminData.data.name} {adminData.data.location} Dhun Jam
          </StyledHeading>
        </>
      )}

      <Details>
        <h3>Do you want to change your customers for requesting songs?</h3>
        <div>
          <input type="radio" />
          <label htmlFor="">Yes</label>
          <input type="radio" />
          <label htmlFor="">No</label>
        </div>

        <h3>Custom song request amount-</h3>
        <StyledInput type="number" />

        <h3>Regular song request amounts, from high to low-</h3>
        <div>
          <StyledInput type="number" defaultValue="129" />
          <StyledInput type="number" defaultValue="43" />
          <StyledInput type="number" defaultValue="34" />
          <StyledInput type="number" defaultValue="65" />
        </div>
      </Details>

      <StyledCanvas ref={chartRef}></StyledCanvas>
      <StyledButton>Save</StyledButton>
    </DASHBOARD>
  );
};

export default DashBoard;

const DASHBOARD = styled.div`
  color: #ffffff;
  width: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid white; */
`;

const StyledHeading = styled.h2`
  font-size: 32px;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  background-color: #030303;
  color: #ffffff;
  border: 1px solid #ffffff;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 5px;
`;

const StyledCanvas = styled.canvas`
  max-width: 80%;
`;

const StyledButton = styled.button`
  background-color: #6741d9;
  color: #ffffff;
  border: 1px solid #f0c3f1;
  width: 600px;
  padding: 10px;
  margin-top: 20px;

  &:hover {
    border: 1px solid #f0c3f1;
  }

  &:active {
    border: 1px solid #f0c3f1;
  }
`;
