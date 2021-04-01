package kr.shlim.api.cart.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class CartDto {
	private long cartNo, carAmount;
}