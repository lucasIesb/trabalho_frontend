import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import styles from './Pesquisa.module.css'

const Pesquisa = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      const filteredData = data.filter((item) =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
      onSearch(filteredData);
    } else {
      onSearch(data);
    }
  }, [searchTerm, data, onSearch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form >
      <Form.Group controlId="search" >
          <Form.Control
            type="text"
            placeholder="Digite o nome do deputado"
            value={searchTerm}
            onChange={handleSearch}
            className={styles.pesquisa}
          />
      </Form.Group>
    </Form>
  );
};

export default Pesquisa;