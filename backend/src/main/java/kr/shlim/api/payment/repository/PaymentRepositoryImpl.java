package kr.shlim.api.payment.repository;

import kr.shlim.api.payment.domain.Payment;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class PaymentRepositoryImpl extends QuerydslRepositorySupport implements PaymentCustomRepository {
	public PaymentRepositoryImpl() {
		super(Payment.class);
	}
}