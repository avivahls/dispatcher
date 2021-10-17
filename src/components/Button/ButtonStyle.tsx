import styled from "styled-components";

export const ButtonStyled = styled.button`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 16px;
border:none;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 26px;

&.primary{
    color: #FFFFFF;
    position: absolute;
    width: 226px;
    height: 36px;
    left: 485px;
    top: 0px;
    background: #0058B9;
    border-radius: 20px;
}
&.primary:hover{
    opacity: 0.8;
}
&.welcome{
    color: #FFFFFF;
    position: absolute;
    width: 714px;
    height: 36px;
    left: 0px;
    top: 0px;
    background: #0058B9;
    border-radius: 10px;
}
&.welcome:hover{
    opacity: 0.8;
}
&.secondary{
    color: #5A5A89;
    position: relative;
    width: 115px;
    height: 36px;
    background: #D9DBE9;
    border-radius: 20px;
}
&.secondary:hover{
    opacity: 0.8;
}
&.textbtn{
    color: #5A5A89;
    position: relative;
    width: 115px;
    height: 36px;
    background: white;
}
&.textbtn:hover{
    background: rgba(217, 219, 233, 0.3);
    border-radius: 20px;
}
& img{
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
}
`;