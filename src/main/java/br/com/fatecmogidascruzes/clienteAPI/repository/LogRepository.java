package br.com.fatecmogidascruzes.clienteAPI.repository;

import br.com.fatecmogidascruzes.clienteAPI.model.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {
}
