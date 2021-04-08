package kr.shlim.api.categoy.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class CategoryDto {
	private long ctgNo;
	private String ctgName;
}