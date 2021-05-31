import styled from 'styled-components'

export const WrapperCardCommodities = styled.main`
overflow-y: scroll;
max-height: 45rem;
padding-bottom: 5rem;
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
&::-webkit-scrollbar {
	display: none;
}

@media(max-width: 360px){
  max-height: 30rem;
}


`
export const WrapperLabels = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
margin-top: -2.6rem;
`
export const Label = styled.span`
font-family: Karla;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #B1BEC2;
text-align: right;

&.part{
  width: 4rem;
  margin-left: 2.5rem;
}
&.pag{
  width: 4rem;
  padding-left: 3.7rem;
}
&.ton{
  width: 4rem;
  margin-left: 2.4rem;
}
&.value{
  width: 18px;
   margin-left: 1.5rem;
}
`

