package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "Cartao")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Cartao extends Entidade {

    @NotNull(message = "Número do cartão não pode ser nulo")
    @NotBlank(message = "Número do cartão não pode ser vazio")
    @Size(max = 16, message = "Número do cartão não pode ter mais de 16 caracteres")
    private String numero;

    @NotNull(message = "Nome impresso no cartão não pode ser nulo")
    @NotBlank(message = "Nome impresso no cartão não pode ser vazio")
    @Size(max = 100, message = "Nome impresso no cartão não pode ter mais de 100 caracteres")
    private String nomeImpresso;

    @NotNull(message = "CVV não pode ser nulo")
    @NotBlank(message = "CVV não pode ser vazio")
    @Size(max = 3, message = "CVV não pode ter mais de 3 caracteres")
    private String cvv;

    @NotNull(message = "Preferencial não pode ser nulo")
    private Boolean isPreferencial;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bandeira_id")
    private Bandeira bandeira;

    @Override
    public void validar() {
        if (numero == null || numero.isEmpty()) {
            throw new IllegalArgumentException ("Número do cartão não pode ser vazio");
        }
        if (nomeImpresso == null || nomeImpresso.isEmpty()) {
            throw new IllegalArgumentException("Nome impresso no cartão não pode ser vazio");
        }
        if (cvv == null || cvv.isEmpty()) {
            throw new IllegalArgumentException("CVV não pode ser vazio");
        }
        if (bandeira == null) {
            throw new IllegalArgumentException("Bandeira do cartão não pode ser nula");
        }
        bandeira.validar();
    }
}
