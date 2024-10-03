package br.com.fatecmogidascruzes.clienteAPI.repository;

import br.com.fatecmogidascruzes.clienteAPI.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
