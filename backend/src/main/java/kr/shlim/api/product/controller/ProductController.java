package kr.shlim.api.product.controller;

import java.util.List;
import java.util.Optional;

import kr.shlim.api.common.controller.AbstractController;
import kr.shlim.api.product.domain.Product;
import kr.shlim.api.product.domain.ProductDto;
import kr.shlim.api.product.service.ProductServiceImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class ProductController extends AbstractController<Product> {
	private final ProductServiceImpl service;
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping("/save")
	public ResponseEntity<Long> save(@RequestBody Product product) {
		logger.info("저장한 제품: " + product.toString());
		return ResponseEntity.ok(service.save(product));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<Long> delete(@RequestBody Product product) {
		logger.info("삭제" + product.toString());
		return ResponseEntity.ok(service.delete(product));
	}
	
	@DeleteMapping("/delete/{prdNo}")
	public ResponseEntity<String> deleteById(@PathVariable long prdNo){
		logger.info("삭제한 제품 번호: " + prdNo);
		return ResponseEntity.ok(service.deleteById(prdNo));
	}
	
	@GetMapping("/count")
	public ResponseEntity<Long> count() {
		return ResponseEntity.ok(service.count());
	}
	
	@GetMapping("/one/{id}")
	public ResponseEntity<Product> getOne(@PathVariable long id) {
		logger.info("조회한 제품 번호: " + id);
		return ResponseEntity.ok(service.getOne(id));
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Optional<Product>> findById(@PathVariable long id) {
		logger.info("조회한 제품 번호: " + id);
		return ResponseEntity.ok(service.findById(id));
	}
	
	@GetMapping("/exists/{id}")
	public ResponseEntity<Boolean> existsById(@PathVariable long id) {
		logger.info("조회한 제품 번호: " + id);
		return ResponseEntity.ok(service.existsById(id));
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Product>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}
	
	@GetMapping("/product-number/{prdNo}")
	public ResponseEntity<List<Product>> findByPrdNo(@PathVariable long prdNo) {
		return ResponseEntity.ok(service.findByPrdNo(prdNo));
	}
	
	@GetMapping("/category/{ctgName}")
	public ResponseEntity<List<Product>> findByCtgName(@PathVariable String ctgName) {
		return ResponseEntity.ok(service.findByCtgName(ctgName));
	}
	
	@PutMapping("/edit/{prdNo}")
	public ResponseEntity<Long> update(@PathVariable long prdNo,
									   @RequestBody ProductDto p) {
		logger.info("수정한 제품: " + prdNo);
		return ResponseEntity.ok(service.update(p));
	}
}