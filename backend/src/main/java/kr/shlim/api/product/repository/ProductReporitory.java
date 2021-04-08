package kr.shlim.api.product.repository;

import java.util.List;

import kr.shlim.api.product.domain.Product;

import kr.shlim.api.product.domain.ProductDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

interface IProductRepository {
	 List<Product> findByPrdNo(long prdNo);
	 List<Product> findByCtgName(String ctgName);
//	 List<Product> findLivingByCategory(String cate);
//	 List<Product> findByPrdName(String name);
}

public interface ProductReporitory extends JpaRepository<Product, Long>, IProductRepository {
	@Query(value = "update Product prd set prd.prd_name = :prdName, "+ "prd.ctg_name = :ctgName " + "prd.prd_price = :prdPrice, " + "prd.prd_inv = :prdInv " + "prd.prd_img = :prdImg"
					+ " where prd.prd_no = :prdNo", nativeQuery = true)
	public long update(@Param("prdNo") long prdNo, @Param("ctgName") String ctgName, @Param("prdPrice") String prdPrice,
					   @Param("prdInv") String prdInv, @Param("prdImg") String prdImg, @Param("prdName") String prdName);
}