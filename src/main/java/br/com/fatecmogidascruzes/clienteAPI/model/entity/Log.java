package br.com.fatecmogidascruzes.clienteAPI.model.entity;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Table(name = "Log")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Log extends Entidade {

    @NotNull(message = "Descrição do log não pode ser nula")
    private LocalDateTime dataHora;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Adjust the column name as necessary
    private Usuario user;

    @Override
    public void validar() {
        if (user == null) {
            throw new IllegalArgumentException("Usuário não pode ser nulo");
        }
    }
}