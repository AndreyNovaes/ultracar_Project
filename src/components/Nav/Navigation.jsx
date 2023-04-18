import React, { useContext } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Navigation = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const buttonStyle = {
    marginRight: '8px',
  };

  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleRegisterClick = () => {
    navigate('/Register');
  };

  const handleLogoutClick = () => {
    setIsAuthenticated(false);
    navigate('/Login');
  };

  return (
    <div className="navigation">
      {!isAuthenticated && (
        <>
          <Button onClick={handleLoginClick} style={buttonStyle}>
            Login
          </Button>
          <Button onClick={handleRegisterClick} style={buttonStyle}>
            Register
          </Button>
        </>
      )}
      {isAuthenticated && (
        <Button onClick={handleLogoutClick} style={buttonStyle}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default Navigation;
