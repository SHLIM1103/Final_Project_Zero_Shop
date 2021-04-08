package kr.shlim.api.categories.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class CategoriesDto {
	private long ctgNo;
	private String ctgName;
}