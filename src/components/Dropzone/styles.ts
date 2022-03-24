import styled from "styled-components";

export const UploadFile = styled.div`
  background-color: #D2E6F4;
  width: 25%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px dashed #8CA4B6;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  font-size: 12px;
  padding: 5px;

  transition: height 0.2s ease;
  color: #8CA4B6;
`

export const Container = styled.div`
  margin-top: 15px;
  
  button {
    margin-top: 10px;
    width: 160px;
  }

  .btn-1 {
    border: none;
    background-color: transparent;
    padding: 15px;
  }

  .btn-2 {
    border: none;
    background-color: #F35149;
    color: #FFFFFF;
    padding: 15px;
    border-radius: 5px;
  }
`