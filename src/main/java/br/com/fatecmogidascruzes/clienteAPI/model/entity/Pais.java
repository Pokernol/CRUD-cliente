package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Pais")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Pais extends Entidade {
    @NotNull(message = "Nome do país não pode ser nulo")
    @NotBlank(message = "Nome do país não pode ser vazio")
    @Size(max = 100, message = "Nome do país não pode ter mais de 100 caracteres")
    private String nome;

    @NotNull(message = "Sigla do país não pode ser nula")
    @NotBlank(message = "Sigla do país não pode ser vazia")
    @Size(max = 2, message = "Sigla do país não pode ter mais de 2 caracteres")
    private String sigla;

    @Override
    public void validar() {
        if (nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("Nome do país não pode ser vazio");
        }
        if (sigla == null || sigla.isEmpty()) {
            throw new IllegalArgumentException("Sigla do país não pode ser vazia");
        }
    }
}