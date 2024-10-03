package br.com.fatecmogidascruzes.clienteAPI.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDTO {

    private Long id;

    @NotBlank(message = "O nome é obrigatório.")
    @Size(max = 100, message = "O nome não pode ter mais de 100 caracteres.")
    private String nome;

    @NotBlank(message = "O e-mail é obrigatório.")
    @Email(message = "O e-mail deve ser válido.")
    private String email;

    @NotBlank(message = "O telefone é obrigatório.")
    @Size(max = 15, message = "O telefone não pode ter mais de 15 caracteres.")
    private String telefone;

    private List<Long> enderecoIds;
    private List<Long> cartaoIds;
    private List<Long> telefoneIds;
}
