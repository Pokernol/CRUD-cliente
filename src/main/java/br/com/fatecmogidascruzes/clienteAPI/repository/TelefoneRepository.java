package br.com.fatecmogidascruzes.clienteAPI.repository;

import br.com.fatecmogidascruzes.clienteAPI.model.entity.Telefone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TelefoneRepository extends JpaRepository<Telefone, Long> {
}
