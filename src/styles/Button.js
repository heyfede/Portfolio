import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 15.625rem;
  height: 3rem;
  background-color: ${({ theme, color }) => theme.colors[color] || "black"};
  color: #151929;
  padding: 1rem;
  margin: 0 ${({ center }) => center ? "auto" : "0"};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
    font-weight: 700;
    background-color: #f4f4f4;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: .3rem;
    margin-bottom: -.175rem;
  }
`

const Button = ({ onClick, color, textAlign, center, children}) => (
  <StyledButton onClick={onClick} color={color} textAlign={textAlign} center={center}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  center: PropTypes.bool,
}

export default Button
