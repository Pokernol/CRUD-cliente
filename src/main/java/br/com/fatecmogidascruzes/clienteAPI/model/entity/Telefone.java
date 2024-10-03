package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import br.com.fatecmogidascruzes.clienteAPI.model.enums.TipoTelefone;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Telefone")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Telefone extends Entidade {

    @NotNull(message = "Tipo de telefone não pode ser nulo")
    private TipoTelefone tipo;

    @NotNull(message = "DDD não pode ser nulo")
    @NotBlank(message = "DDD não pode ser vazio")
    @Size(max = 2, message = "DDD não pode ter mais de 2 caracteres")
    private String ddd;

    @NotNull(message = "Número não pode ser nulo")
    @NotBlank(message = "Número não pode ser vazio")
    @Size(max = 9, message = "Número não pode ter mais de 9 caracteres")
    private String numero;

    @Override
    public void validar() {
        if (tipo == null) {
            throw new IllegalArgumentException("Tipo de telefone não pode ser nulo");
        }
        if (ddd == null || ddd.isEmpty()) {
            throw new IllegalArgumentException("DDD não pode ser vazio");
        }
        if (numero == null || numero.isEmpty()) {
            throw new IllegalArgumentException("Número não pode ser vazio");
        }
    }
}
