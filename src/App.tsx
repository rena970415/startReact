import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { keyframes} from '@emotion/react';

const Container = styled.div`
  text-align:center
`;

const Header = styled.header`
  ...
`;

const spinAnimation = keyframes`
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }    
`;

const AppLink = styled.a`
  color:#61afb;
`;


const AppLogo = styled.img`
  height : 40vmin;
  pointer-events:none;
  @media (prefers-reduced-motion: no-preference) { 
    animation: App-logo-spin infinite 20s linear;   
  }
`;




function App() {
  return (
    <Container>      
      <Header>
        ...
      </Header>      
      <AppLogo src={logo} alt="logo"></AppLogo>
      <AppLink href="https://reactjs.org"
        target="blank"
        rel="nonpener noreferrer"
      >
        Learn React
      </AppLink>
    </Container>
  );
}

export default App;
