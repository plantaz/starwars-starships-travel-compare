import styled from 'styled-components';

export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 0.85rem 1.2rem 0.85rem 0.35rem;    
  border: none;
  border-bottom: 2px solid #ddd;
`;

export const InputButton = styled.input`
  text-transform: capitalize;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  background: tomato;
  border: none;
  cursor: pointer;
`;
