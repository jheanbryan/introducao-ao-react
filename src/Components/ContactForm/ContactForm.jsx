import { useState } from 'react';
import './ContactForm.css';
import ContactCard from '../ContactCard/ContactCard';

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contatos, setContatos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoContato = {
      id: Date.now(),
      nome,
      email,
      telefone
    };

    setContatos([...contatos, novoContato]);

    // limpar os campos
    setNome('');
    setEmail('');
    setTelefone('');
  };

  const removerContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Adicionar Contato</h2>

        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>

        <button type="submit">Salvar Contato</button>
      </form>

      <div className="cards-container">
        {contatos.map((contato) => (
          <ContactCard
            key={contato.id}
            contato={contato}
            onRemover={removerContato}
          />
        ))}
      </div>
    </div>
  );
}
