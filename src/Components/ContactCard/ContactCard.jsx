import './ContactCard.css';

export default function ContactCard({ contato, onRemover }) {
  return (
    <div className="card">
      <h3>{contato.nome}</h3>
      <p><strong>Email:</strong> {contato.email}</p>
      <p><strong>Telefone:</strong> {contato.telefone}</p>
      <button onClick={() => onRemover(contato.id)}>Excluir</button>
    </div>
  );
}
