import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import './HomePage.css';
import HomeImage from '../assets/Home.png'; 

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/listado`, { state: { query: searchQuery } });
    }
  };

  return (
    <div className="home-container">
      <img src={HomeImage} alt="Home" className="home-image" />
      <h1>Bienvenido a la Página de Inicio</h1>
      <TextField
        label="Buscar productos"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        className="search-button"
      >
        Buscar
      </Button>
    </div>
  );
};

export default HomePage;
