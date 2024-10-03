package br.com.fatecmogidascruzes.clienteAPI.repository;

import br.com.fatecmogidascruzes.clienteAPI.model.entity.Pais;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaisRepository extends JpaRepository<Pais, Long> {
}
