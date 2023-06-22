import { render, screen } from '@testing-library/react';
import { EmptyContacts } from '.';

describe('<EmptyContacts />', () => {
  it('should show texts when this component is called', () => {
    render(<EmptyContacts />)

    expect(screen.getByText('Você ainda não tem nenhum contato cadastrado!')).toBeInTheDocument();
    expect(screen.getByText('Clique no botão acima para cadastrar o seu primeiro!')).toBeInTheDocument();
    expect(screen.getByText('”Novo contato”')).toBeInTheDocument();
  })

  it('should show image when this component is called', () => {
    render(<EmptyContacts />)

    expect(screen.getByAltText('Imagem de uma caixa vazia representando que não há contatos cadastrados')).toBeInTheDocument();
  })
})
