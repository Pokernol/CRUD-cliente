package br.com.fatecmogidascruzes.clienteAPI.service;

import br.com.fatecmogidascruzes.clienteAPI.model.entity.Cliente;
import br.com.fatecmogidascruzes.clienteAPI.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    protected final ClienteRepository repository;

    @Autowired
    protected ClienteService(ClienteRepository repository) {
        this.repository = repository;
    }

    public Cliente save(Cliente cliente) {
        return repository.save(cliente);
    }

    public List<Cliente> findAll() {
        return repository.findAll();
    }

    public Optional<Cliente> findById(Long id) {
        return repository.findById(id);
    }

    public void disable(Long id) {
        repository.findById(id).ifPresent(this::disable);
    }

    public void disable(Cliente cliente) {
        cliente.setAtivo(false);
        repository.save(cliente);
    }
}