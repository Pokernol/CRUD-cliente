package br.com.fatecmogidascruzes.clienteAPI.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum TipoEndereco {
    ENTREGA_E_COBRANCA("Entrega e Cobrança"),
    COBRANCA("Cobrança"),
    ENTREGA("Entrega"),
    RESIDENCIAL("Residencial");

    private final String descricao;

    TipoEndereco(String descricao) {
        this.descricao = descricao;
    }

    @JsonValue
    public String getDescricao() {
        return descricao;
    }

    @JsonCreator
    public static TipoEndereco fromDescricao(String descricao) {
        for (TipoEndereco tipo : values()) {
            if (tipo.getDescricao().equalsIgnoreCase(descricao)) {
                return tipo;
            }
        }
        throw new IllegalArgumentException("Tipo de Endereço não reconhecido: " + descricao);
    }
}
