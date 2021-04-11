package kr.shlim.api.product.service;

import java.util.List;

import kr.shlim.api.product.domain.Product;

public interface ProductService {
	public List<Product> findByPrdNo(long prdNo);
	public List<Product> findByPrdNameContaining(String ctgName);
	public List<Product> findByCtgName(String ctgName);
	public String deleteById(long prdNo);
}