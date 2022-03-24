import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 5%;

  div {
    align-self: flex-start;
    margin-left: 5%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15%;
  }

  button {
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #F35149;
    padding-bottom: 5px;
    font-size: 14px;
    width: 200px;
  }

  h1 {
    color: #A4A4A4;
  }
`

export const Table = styled.table`
  background-color: #FFFFFF;
  border-collapse: collapse;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  width: 90%;
  height: 30%;
  max-height: 40%;
  border-radius: 10px;
  
  td {
    border-bottom: 1px solid #e1e1e1;
    border-top: 1px solid #e1e1e1;
    padding: 5px;
    text-align: center;
  }
  
  th {
    padding: 10px;
    font-size: 14px;
    color: #A4A4A4;
  }
  
  table {
    overflow-y:scroll;
  }
`
