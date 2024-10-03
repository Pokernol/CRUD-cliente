package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Usuario extends Entidade {

    @NotNull(message = "Email não pode ser nulo")
    @NotBlank(message = "Email não pode ser vazio")
    @Email(message = "Email deve ser válido")
    private String email;

    @NotNull(message = "Senha não pode ser nula")
    @NotBlank(message = "Senha não pode ser vazia")
    @Size(min = 8, message = "Senha deve ter pelo menos 8 caracteres")
    @Size(max = 100, message = "Senha não pode ter mais de 100 caracteres")
    private String senha;

    public void alterarSenha(String novaSenha) {
        if (novaSenha == null || novaSenha.length() < 8) {
            throw new IllegalArgumentException("A senha deve ter pelo menos 8 caracteres.");
        }
        this.senha = criptografarSenha(novaSenha);
    }

    private String criptografarSenha(String senha) {
        return new StringBuilder(senha).reverse().toString();
    }

    @Override
    public void validar() {
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException("Email não pode ser vazio");
        }
        if (senha == null || senha.isEmpty()) {
            throw new IllegalArgumentException("Senha não pode ser vazia");
        }
    }
}
