package kr.shlim.api.category.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import kr.shlim.api.product.domain.Product;
import lombok.Getter;

@Entity @Getter @Table(name="category")
public class Category {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ctg_no") private long ctgNo;
	@Column(name="ctg_name") private String ctgName;

	@OneToMany(mappedBy = "category")
	private List<Product> products = new ArrayList<>();
}