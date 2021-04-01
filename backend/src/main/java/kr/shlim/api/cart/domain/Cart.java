package kr.shlim.api.cart.domain;

import javax.persistence.*;

import kr.shlim.api.payment.domain.Payment;

import lombok.Getter;

@Entity @Getter
@Table(name="carts")
public class Cart {
	   @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	   @Column(name="cart_no") private long cartNo;
	   @Column(name="cart_amount") private long cartAmount;
	   
	   @OneToOne
	   @JoinColumn(name = "pay_no")
	   private Payment payment;
}
