package br.com.fatecmogidascruzes.clienteAPI.repository;

import br.com.fatecmogidascruzes.clienteAPI.model.entity.Bandeira;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BandeiraRepository extends JpaRepository<Bandeira, Long> {
}
