package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import br.com.fatecmogidascruzes.clienteAPI.model.enums.TipoEndereco;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Endereco")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Endereco extends Entidade {
    @NotNull(message = "CEP não pode ser nulo")
    @NotBlank(message = "CEP não pode ser vazio")
    @Size(max = 8, message = "CEP não pode ter mais de 8 caracteres")
    private String cep;

    @Size(max = 10, message = "Número não pode ter mais de 10 caracteres")
    private String numero;

    @Size(max = 100, message = "Complemento não pode ter mais de 100 caracteres")
    private String complemento;

    @NotNull(message = "Logradouro não pode ser nulo")
    @NotBlank(message = "Logradouro não pode ser vazio")
    @Size(max = 100, message = "Logradouro não pode ter mais de 100 caracteres")
    private String logradouro;

    @NotNull(message = "Tipo de logradouro não pode ser nulo")
    @NotBlank(message = "Tipo de logradouro não pode ser vazio")
    @Size(max = 50, message = "Tipo de logradouro não pode ter mais de 50 caracteres")
    private String tipoLogradouro;

    @NotNull(message = "Bairro não pode ser nulo")
    @NotBlank(message = "Bairro não pode ser vazio")
    @Size(max = 50, message = "Bairro não pode ter mais de 50 caracteres")
    private String bairro;

    @NotNull(message = "Cidade não pode ser nula")
    @NotBlank(message = "Cidade não pode ser vazia")
    @Size(max = 50, message = "Cidade não pode ter mais de 50 caracteres")
    private String cidade;

    @NotNull(message = "Estado não pode ser nulo")
    @NotBlank(message = "Estado não pode ser vazio")
    @Size(max = 50, message = "Estado não pode ter mais de 50 caracteres")
    private String estado;

    @ManyToOne
    private Pais pais;

    @NotNull(message = "Tipo de endereço não pode ser nulo")
    private TipoEndereco tipo;

    @Override
    public void validar() {
        if (cep == null || cep.isEmpty()) {
            throw new IllegalArgumentException("CEP não pode ser vazio");
        }
        if (numero == null || numero.isEmpty()) {
            throw new IllegalArgumentException("Número não pode ser vazio");
        }
        if (logradouro == null || logradouro.isEmpty()) {
            throw new IllegalArgumentException("Logradouro não pode ser vazio");
        }
        if (bairro == null || bairro.isEmpty()) {
            throw new IllegalArgumentException("Bairro não pode ser vazio");
        }
        if (cidade == null || cidade.isEmpty()) {
            throw new IllegalArgumentException("Cidade não pode ser vazia");
        }
        if (estado == null || estado.isEmpty()) {
            throw new IllegalArgumentException("Estado não pode ser vazio");
        }
        if (pais == null) {
            throw new IllegalArgumentException("País não pode ser nulo");
        }
        pais.validar();
    }
}
