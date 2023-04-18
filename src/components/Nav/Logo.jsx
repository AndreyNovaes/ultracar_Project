import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Button
      className="logo-container"
      onClick={handleLogoClick}
      style={{
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        width: 100,
        height: 100,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ghost
    >
      <img src="/images/cabecalho.png" alt="UltraCar Logo" className="logo-image" width="100" />
    </Button>
  );
};

export default Logo;
