package br.com.fatecmogidascruzes.clienteAPI.model.enums;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Genero {
    MASCULINO("M"),
    FEMININO("F"),
    OUTRO("O");

    private final String codigo;

    Genero(String codigo) {
        this.codigo = codigo;
    }

    @JsonValue
    public String getCodigo() {
        return codigo;
    }

    @JsonCreator
    public static Genero fromCodigo(String codigo) {
        for (Genero genero : values()) {
            if (genero.codigo.equalsIgnoreCase(codigo)) {
                return genero;
            }
        }
        throw new IllegalArgumentException("Gênero não reconhecido: " + codigo);
    }
}
