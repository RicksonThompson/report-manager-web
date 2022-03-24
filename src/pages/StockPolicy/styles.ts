import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 5%;
  padding-left: 5%;

  div {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-bottom: 5%;
  }

  button {
    background-color: transparent;
    border: 2px solid #F35149;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: #F35149;
  }

  h1 {
    color: #A4A4A4;
  }
`;

export const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  background-color: #FFFFFF;
  height: 100px;
  
  thead {
    background-color: #294E71;
    color: #FFFFFF;
    padding: 10px;
    height: 50px;
  }

  td {
    text-align: center;
    border-bottom: 1px solid #367FC5;
    border-radius: 0px 0px 5px 10px;

    button {
      border: none;
      background-color: transparent;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    width: 50%;
    height: auto;
  }
  
  div {
    display: flex;
    justify-content: end;
    margin-top: 5px;
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
    padding: 10px;
    border-radius: 5px;
  }
`

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    color: #F35149;
    font-weight: bold;
  }

  button {
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    color: #A4A4A4;
  }
`

export const ContainerModal = styled.div`
  width: 400px;
  height: max-content;
`
