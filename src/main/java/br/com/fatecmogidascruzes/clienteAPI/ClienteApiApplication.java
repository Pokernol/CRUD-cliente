package br.com.fatecmogidascruzes.clienteAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "br.com.fatecmogidascruzes.clienteAPI")
public class ClienteApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(ClienteApiApplication.class, args);
	}
}
