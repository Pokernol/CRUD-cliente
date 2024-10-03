package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import br.com.fatecmogidascruzes.clienteAPI.model.enums.Genero;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Cliente")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Cliente extends Entidade {

    @NotNull(message = "Nome não pode ser nulo")
    @NotBlank(message = "Nome não pode ser vazio")
    @Size(max = 100, message = "Nome não pode ter mais de 100 caracteres")
    private String nome;

    @NotNull(message = "Data de nascimento não pode ser nula")
    private LocalDate dataNascimento;

    @NotNull(message = "Email não pode ser nulo")
    @NotBlank(message = "Email não pode ser vazio")
    @Email(message = "Email deve ser válido")
    private String email;

    @NotNull(message = "CPF não pode ser nulo")
    @NotBlank(message = "CPF não pode ser vazio")
    private String cpf;

    private int ranking;

    @NotNull(message = "Gênero não pode ser nulo")
    private Genero genero;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cliente_id")
    private List<Endereco> enderecos = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cliente_id")
    private List<Cartao> cartoes = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cliente_id")
    private List<Telefone> telefones = new ArrayList<>();

    public void adicionarEndereco(Endereco endereco) {
        if (endereco == null) {
            throw new IllegalArgumentException("Endereço não pode ser nulo");
        }
        if (enderecos.stream().anyMatch(e -> e.getTipo() == endereco.getTipo())) {
            throw new IllegalArgumentException("Já existe um endereço do tipo " + endereco.getTipo());
        }
        this.enderecos.add(endereco);
    }

    public void adicionarTelefone(Telefone telefone) {
        if (telefone == null) {
            throw new IllegalArgumentException("Telefone não pode ser nulo");
        }
        if (telefones.stream().anyMatch(t -> t.getTipo() == telefone.getTipo() && t.getNumero().equals(telefone.getNumero()))) {
            throw new IllegalArgumentException("Já existe um telefone do mesmo tipo e número");
        }
        this.telefones.add(telefone);
    }

    public void adicionarCartao(Cartao cartao) {
        if (cartao.getIsPreferencial()) {
            for (Cartao c : cartoes) {
                if (c.getIsPreferencial()) {
                    c.setIsPreferencial(false);
                    break;
                }
            }
        }
        this.cartoes.add(cartao);
    }

    public void inativar() {
        setAtivo(false);
    }

    @Override
    public void validar() {
        if (nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio");
        }
        if (dataNascimento == null) {
            throw new IllegalArgumentException("Data de nascimento não pode ser nula");
        }
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException("Email não pode ser vazio");
        }
        if (cpf == null || cpf.isEmpty()) {
            throw new IllegalArgumentException("CPF não pode ser vazio");
        }
        if (enderecos.isEmpty()) {
            throw new IllegalArgumentException("Cliente deve ter pelo menos um endereço");
        }
        if (telefones.isEmpty()) {
            throw new IllegalArgumentException("Cliente deve ter pelo menos um telefone");
        }
    }
}
