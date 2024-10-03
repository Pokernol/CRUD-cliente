package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Bandeira")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Bandeira extends Entidade {

    @NotNull(message = "Descrição da bandeira não pode ser nula")
    @NotBlank(message = "Descrição da bandeira não pode ser vazia")
    @Size(max = 50, message = "Descrição da bandeira não pode ter mais de 100 caracteres")
    private String descricao;

    @Override
    public void validar() {
        if (descricao == null || descricao.isEmpty()) {
            throw new IllegalArgumentException ("Descrição da bandeira não pode ser vazia");
        }
    }
}
