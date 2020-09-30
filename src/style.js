import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 0.85rem 1.2rem 0.85rem 0.35rem;    
  border: none;
  border-bottom: 2px solid #ddd;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  color: white;
  background: tomato;
  border: none;
  padding: 1rem;
  margin: 0 1px;
  cursor: pointer;
  
  &:disabled {
    background: #ddd;
  }
`;
